# MDS - BemCuidar

Projeto desenvolvido para a disciplina de laboratório de Engenharia de Software.

A plataforma BemCuidar tem como propósito conectar cuidadores dedicados e qualificados a famílias e indivíduos que necessitam de assistência especializada, abrangendo cuidados com idosos, crianças e pessoas com condições especiais, de maneira segura, transparente e humanizada.

---

## Tecnologias Utilizadas

- Frontend:
  - Angular 17
  - TypeScript
  - Angular Material
  - Leaflet (mapas interativos e geolocalização)
  - SCSS

- Backend:
  - Node.js 20 LTS
  - Express
  - TypeScript
  - JSON Web Tokens (JWT) para autenticação
  - Bcrypt para hash seguro de senhas

- Banco de Dados e Infraestrutura:
  - PostgreSQL 16
  - Docker e Docker Compose

---

## How to run

- Instale o Docker
- Clone o repositório em um arquivo local
- Insira o arquivo .env contendo as credenciais do banco de desenvolvimento na raíz do projeto ( pasta onde está localizado o arquivo docker-compose.yaml )
- Insira o outro arquivo .env dentro da pasta backend ( pasta onde está localizado o arquivo init.sql)
- Na raíz do projeto, digitar "sudo docker compose up" (linux) ou "docker compose up" (windows) através do terminal e aguardar alguns segundos
- O front end será exibido em http://localhost:8080
- O back end estará rodando em http://localhost:3000

### Portas e Servicos em Execucao

- Frontend: http://localhost:8080 (mapeado para porta interna 4200)
- Backend: http://localhost:3000
- Banco de Dados PostgreSQL: localhost:5434 (mapeado para porta interna 5432)

---

## Variaveis de Ambiente (.env)

O projeto requer dois arquivos de configuracao baseados nos modelos de exemplo (.env.example):

1. Arquivo .env na raiz do projeto (veja .env.example):
```env
POSTGRES_USER=seu_usuario
POSTGRES_DB=seu_banco
POSTGRES_PASSWORD=sua_senha
```

2. Arquivo .env dentro da pasta backend/ (veja backend/.env.example):
```env
PORT=3000
JWT_SECRET=seu_jwt_secret

# Conexao banco de desenvolvimento (Docker)
POSTGRES_HOST_DEV=database
POSTGRES_USER_DEV=seu_usuario
POSTGRES_DB_DEV=seu_banco
POSTGRES_PASSWORD_DEV=sua_senha
POSTGRES_PORT_DEV=5432
```

---

## Conta de Teste Padrao (Seed / Mock)

O banco de dados vem pre-populado atraves do init.sql com o seguinte usuario para testes:

- E-mail: user@gmail.com
- Senha: 123
- Perfil: Usuario e Cuidador cadastrado para verificacao de listagem e solicitacoes.

---

## Testes Unitarios

- Os testes unitários se encontram em:
- frontend/src/app/components/nav-bar/nav-bar.component.spec.ts
- frontend/src/app/components/list-provider/list-provider.component.spec.ts
- frontend/src/app/components/register-provider/register-provider.component.spec.ts
- backend/src/controllers/tests/login.controller.spec.ts
- backend/src/controllers/tests/user.controller.spec.ts

### Execucao dos Testes via Docker

- Para rodar os testes do Frontend (Jest):
```bash
docker compose exec front npm test
```

- Para rodar os testes do Backend (Jest):
```bash
docker compose exec back npm test
```

---

## Comandos Uteis

- Iniciar todos os servicos em segundo plano:
```bash
docker compose up -d
```

- Parar todos os servicos:
```bash
docker compose down
```

- Visualizar os logs do backend em tempo real:
```bash
docker compose logs -f back
```

- Visualizar os logs do frontend:
```bash
docker compose logs -f front
```

- Reconstruir os containers apos alteracoes em dependencias ou Dockerfile:
```bash
docker compose build
```
