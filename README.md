# MDS

Projeto desenvolvido para a disciplina de laboratório de Engenharia de Software

# 🛠️ How to run

- Instale o Docker
- Clone o repositório em um arquivo local
- Insira o arquivo .env contendo as credenciais do banco de desenvolvimento na raíz do projeto ( pasta onde está localizado o arquivo docker-compose.yaml )
- Insira o outro arquivo .env dentro da pasta backend ( pasta onde está localizado o arquivo init.sql)
- Na raíz do projeto, digitar "sudo docker compose up" (linux) ou "docker compose up" (windows) através do terminal e aguardar alguns segundos
- O front end será exibido em http://localhost:8080
- O back end estará rodando em http://localhost:3000

# Testes Unitários
- Os testes unitários se encontram em:
- frontend/src/app/components/nav-bar/nav-bar.component.spec.ts
- frontend/src/app/components/list-provider/list-provider.component.spec.ts
- frontend/src/app/components/register-provider/register-provider.component.spec.ts
- backend/src/controllers/tests/login.controller.spec.ts
- backend/src/controllers/tests/user.controller.spec.ts
