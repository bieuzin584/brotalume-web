import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
const release=JSON.parse(await fs.readFile('release.json','utf8'));
const sha=buffer=>createHash('sha256').update(buffer).digest('hex');
const root=process.argv[2]||'.';
const buffers=[];
for(const part of release.parts){
 if(!/^web-release\.zip\.part-\d{2}$/.test(part.file))throw Error('Nome de parte inválido.');
 const data=await fs.readFile(path.join(root,part.file));
 if(data.length!==part.bytes||sha(data)!==part.sha256)throw Error('Parte inválida: '+part.file);
 buffers.push(data);
}
const archive=Buffer.concat(buffers);
if(archive.length!==release.archiveBytes||sha(archive)!==release.archiveSha256)throw Error('Pacote não corresponde ao manifesto.');
await fs.mkdir('builds/verified',{recursive:true});
await fs.writeFile('builds/verified/site.zip',archive);
if(process.argv.includes('--extract'))execFileSync('unzip',['-q','builds/verified/site.zip','-d','_site'],{stdio:'inherit'});
console.log('Release verificada: '+release.version+' · '+archive.length+' bytes.');
