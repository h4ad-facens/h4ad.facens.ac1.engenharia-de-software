# Engenharia de Software 2 - AC2

Esse é o repositório que irá conter as entregas da AC1 de Engenharia de Software 2.

## Como rodar

É necessário que você possua o NodeJS 18.x para rodar esse projeto, além disso, você também precisa instalar a CLI do Cloudflare chamada [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/).

Após isso, instale as dependências que o projeto pede usando:

```bash
npm ci
```

Finalmente, para começar a testar, basta rodar o comando:

```bash
npm run start
```

É bem possível que você tenha problema de permissão, visto que, o projeto está configurado com os bancos apontados para a conta pessoal do @H4ad.

Se for o caso, experimente ir para a seção de [usando o docker](#usando-docker) para rodar sem problemas.

## Como testar

Para rodar os testes, basta rodar com o seguinte comando:

```bash
npm run test
```

## Usando Docker

Para rodar o projeto com Docker, você precisa ter também instalado o [Docker Compose](https://docs.docker.com/compose/install/).

Após a instalação, você só precisa rodar o seguinte comando na raiz do projeto:

```bash
docker compose up -d
```

Isso irá iniciar tanto a API (na porta 3000) quanto um banco de dados Postgres (na porta 5432).
