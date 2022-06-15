# Start Front-end project

Navegando pelo github, achei um template chamado "project start" do [WillMoreiraDev](https://github.com/WillMoreiraDev), então tive a curiosidade de recriar do zero e assim nasceu o meu `start front-end project`.

O projeto é algo simples para você utilizar o SASS junto com live server, não ficando dependente de uma IDE, quis criar para ter uma noção básica do Gulp e ter como começar um projeto de forma rápida, com resets no css e podendo tuilizar meus padrões.

## Ferramentas
- Yarn
- Gulp
- Sass
- [Open Color](https://github.com/yeun/open-color)
- [Font size](https://www.gridlover.net/try)
  
## Start project

Use `yarn` para instalar os pacotes e `gulp` para iniciar o projeto `npm install --global gulp-cli`

Para utilizar o `Open Color` importe ou utilize o `main.scss`, após isso escolha uma cor e intensidade `color: $oc-blue-4`;
![](https://camo.githubusercontent.com/b492536cc2eed3477588aad9f7332201f1304bc0c75eb34aff210b5f1d1d1c1f/68747470733a2f2f7965756e2e6769746875622e696f2f6f70656e2d636f6c6f722f61737365742f696d616765732f6f70656e2d636f6c6f722e737667)
<br/>
## Avisos

1 - Fiz esse projeto em uma madrugada, até a data de hoje, o arquivo `gulpfile.js` está atualizado.

2 - Edite o css sempre dentro da pasta `scss`.

3 - Ainda não sei se irei dar futuros updates, porém alguns deles são:

- Gulp babel e Gulp uglify.
- Configuração default para o SASS.
- Media querys pensando sempre no mobile first.
- Projeto no figma com grid criado em três breakpoints.

4 - Lembre-se de sempre excluir a pasta `.git` e o arquivo `readme.md` para criar seu próprio repo.
