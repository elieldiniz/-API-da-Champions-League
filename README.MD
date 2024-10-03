
# API de Gerenciamento de Jogadores e Clubes champions League

Esta API foi desenvolvida utilizando Node.js com o framework Express. O objetivo desta API é fornecer um sistema básico para gerenciar jogadores e clubes, permitindo operações CRUD (Create, Read, Update, Delete) para jogadores e listagem de clubes.


## Arquitetura

A arquitetura da aplicação segue o padrão N-Layers, onde as responsabilidades são separadas em diferentes camadas, como mostrado na imagem abaixo:

![Arquitetura inicial N-Layers](https://i.ibb.co/n6SpTKz/arquitetura-projetos.png)
- Camada de Roteamento: Define os endpoints da API e direciona as requisições para os controladores corretos.
- Camada de Controle: Responsável por tratar as requisições HTTP e interagir com a camada de serviços.
- Camada de Modelos: Define as estruturas de dados usadas no sistema.
- Camada de Serviços: Lógica de negócio da aplicação.
## Tecnologias Utilizadas

- Node.js
- Express
- Typescript (opcional, se estiver usando)
- Banco de dados (adicionar se estiver utilizando um banco de dados, ex: MongoDB, PostgreSQL)

## Endpoints 

Jogadores

- GET /players: Retorna todos os jogadores.

- POST /players: Cria um novo jogador.

- DELETE /players/:id: Remove um jogador pelo ID.

- PATCH /players/:id: Atualiza parcialmente os dados de um jogador pelo ID.

- GET /players/:id: Retorna um jogador específico pelo ID.

Clubes

- GET /clubs: Retorna todos os clubes cadastrados.

## Instalação e Execução

Pré-requisitos

Node.js (v14 ou superior)

NPM ou Yarn

Clone o repositório:

bash
Copiar código
git clone https://github.com/seu-usuario/sua-api.git
Instale as dependências:

```bash
    npm install
```

```bash
  yarn install
```

inicie o servidor

```bash
  npm run start:dev
```

```bash
  npm run start:dev
```

http://localhost:3333

## Como Contribuir

Faça um fork do projeto.

- Crie sua feature branch (git checkout -b feature/minha-feature).

- Commit suas mudanças (git commit -m 'Adicionando uma nova feature').

- Dê um push na sua branch (git push origin feature/minha-feature).

- Abra um Pull Request.

## Estrutura de Diretórios

bash

Copiar código

├── controllers/          # Lógica dos controladores

├── models/               # Modelos e interfaces

├── routes/               # Definição das rotas

├── services/             # Lógica de negócios e serviços

├── app.js                # Arquivo principal da aplicação

└── README.md             # Documentação do projeto

## Futuras Implementações

 Adicionar autenticação JWT

 Implementar banco de dados

 Adicionar testes automatizados

## Licença

Este projeto está licenciado sob a licença MIT.
