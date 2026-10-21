# Brotalume web

[Jogar no navegador](https://bieuzin584.github.io/brotalume-web/)

Jogo de fazenda original para celular e PC, feito em Godot 4.7.2. Versão 0.4.0: 21 cultivos, 6 tipos de animais, 17 construções produtivas, 45 receitas, cidade com comerciantes, pesca, metas e vizinhos simulados.

## Como jogar

Abra o link e escolha **Criar fazenda**. Use um e-mail fictício, como `ana@fazenda.local`, e uma senha inventada com pelo menos 4 caracteres. Cada perfil começa do zero e tem seu próprio progresso. Não use senha real.

É um perfil local de teste. E-mail fictício, verificador de senha e fazenda ficam neste navegador. Não há banco de dados, conta online, recuperação de senha ou sincronização automática entre aparelhos. Limpar os dados do navegador ou usar navegação privada pode apagar a fazenda.

No iPhone, abra no Safari. Pode usar Compartilhar → Adicionar à Tela de Início. A primeira carga baixa o motor e as artes: aguarde o indicador de progresso. O navegador precisa de WebAssembly e WebGL 2.

Toque para plantar/colher, arraste para mover o mapa e use dois dedos ou +/− para zoom. Plantações, Produções, Loja, Pedidos e Cidade são os atalhos principais. Cultivos, animais e máquinas liberam por nível.

## Backup e feedback

O botão **Perfil, backup e feedback** exporta a fazenda em JSON e permite restaurar o backup em outro perfil/aparelho. A restauração substitui somente a fazenda do perfil atual, após confirmação.

Em **Dar feedback**, avalie o jogo e descreva dificuldades e sugestões. Escolha copiar ou compartilhar o texto; nada é enviado automaticamente. Inclui versão, tamanho da tela e nível, sem e-mail ou senha.

## Publicação e validação

Este repositório é separado dos demais projetos e não contém saves ou perfis de jogadores. O workflow valida tamanhos e SHA-256 definidos em `release.json`, reúne `web-release.zip.part-XX`, extrai o site e publica no GitHub Pages.

Foram aprovadas 484 verificações de regras, progressão, produção, economia, pesca, persistência e interface mobile. Execução web conferida em Chrome com largura de celular e desktop. Ainda precisa de feedback em iPhone/Safari e Android físicos.

É um protótipo jogável. Os vizinhos são simulados; ainda não há multiplayer, compras com dinheiro real ou publicação na App Store. Os tempos curtos permitem experimentar a progressão.

## Créditos

Godot é distribuído sob licença MIT. Avisos do motor e de componentes de terceiros acompanham o site em `GODOT-LICENSE.txt` e `GODOT-COPYRIGHT.txt`. As artes foram criadas para este projeto.
