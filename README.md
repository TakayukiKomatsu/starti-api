# Starti API

> Backend desenvolvido como teste técnico para oportunidade de trabalho como desenvolvedor Node Fullstack JR.

## Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [] Melhorias no Dockerfile
- [] Testes unitários

## Tecnologias utilizadas

- AdonisJS v5
- Yarn
- Docker
- MySQL
- Git
- Gitflow

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você instalou alguma versão recente do `node.js`
* Você instalou alguma versão recente do `docker`.

## 🚀 Instalando Starti-API

Para instalar o Starti-API, siga estas etapas:

```cmd
    git clone https://github.com/TakayukiKomatsu/starti-api
```

## ❗Observações

Após adicionar seu banco de dados, será necessário rodar um

```cmd
    node ace migration:run
```

Pois inicialmente,não haverá tabelas no seu banco de dados

## ☕ Usando Starti-API

Para usar Starti-API>, siga estas etapas:

- Etapa necessária para subir o banco de dados e adicionar, instalar as dependências e rodar o projeto

```bash
$ docker-compose up -d
$ yarn
$ yarn run build
```

- Caso queira rodar algum seeder e poderá escolher entre existentes:

```node
    node ace db:seed -i
```

- Para rodar o projeto como desenvolvimento:

```node
    node ace serve --watch

    ou

    yarn dev
```

- Para rodar o projeto como produção:

```node
    node ace build --production

    ou

    yarn build
```

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo **MIT** para mais detalhes.
