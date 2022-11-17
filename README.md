# Softmaps

A ideia é criar uma aplicação onde os usuários consigam buscar por um determinado país, olhar os detalhes com informações detalhadas e conseguir editar os dados. Como um auxílio para quem pesquisa, é possível repetir uma pesquisa recente e visualizar os últimos 5 resultados da busca.

[Demo Softmaps](https://ihfernando.gitlab.io/softmaps/)

Para rodar o projeto, após feito o clone, é necessário realizar a instalação das dependências:

#### NPM

```console
npm install
```

#### YARN
```console
yarn
```

Após concluída a instalação, o projeto estará pronto para execução:

#### NPM

```console
npm run start
```

#### YARN

```console
yarn start
```

A aplicação estará disponível na rota: localhost:3000


### Storybook

O projeto também disponibiliza uma documentação dos componentes com o Storybook. Para conseguir visualizar essa apresentação, basta utilizar o seguinte comando:


#### NPM

```console
npm run storybook
```

#### YARN

```console
yarn storybook
```

### Processo de desenvolvimento

Todo o processo de criação e desenvolvimento foi documentado na plataforma [Notion](https://www.notion.so/).

Disponível em:[Softmaps - Notion](https://www.notion.so/Softmaps-727df74d106a44388be37fd3078ed47c).


### Extra: Aplicação em monorepo

Disponibilizei também a mesma aplicação criada com Lerna, Next e Typescript. A ideia é mostrar como seria simples realizar uma migração de tecnologia, tendo em vista que, para o desenvolvimento da primeira versão já foi levado em consideração que teríamos as mesmas variáveis de CSS, mesmos importes de componentes disponíveis na nova estrutura. Basicamente, depois de realizada a configuração da estrutura do monorepo, os arquivos de componentes, reducers, sagas, store, pages, utils, etc... Foram copiados para a nova arquitetura, com pequenos ajustes e adaptações. (Observação: Devido ao tempo, realizei apenas a migração do primeiro fluxo para o monorepo [Tela de busca dos países - Home])

Vale ressaltar que esta mesma estrutura funcionaria caso não tivessemos os componentes direto no monorepo (em um JFrog ou NPM mesmo), o que facilitaria em casos onde temos Design System.

Para executar o projeto em monorepo, é necessário estar na pasta /softmaps-monorepo, realizar a instalação das dependências: 

#### NPM

```console
npm install
```

#### YARN
```console
yarn
```

E depois rodar com o comando:

#### NPM

```console
npm run build
```

#### YARN

```console
yarn build
```

Após o build, o projeto estará disponível para execução:
A aplicação estará rodando na rota: localhost:8080


#### NPM

```console
npm run dev
```

#### YARN

```console
yarn dev
```


#### Links úteis
* [Typescript](https://www.typescriptlang.org/)
* [Styled Components](https://styled-components.com/)
* [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
* [Notion](https://www.notion.so/)
* [NextJS](https://nextjs.org/)
* [Lerna](https://lerna.js.org/)

