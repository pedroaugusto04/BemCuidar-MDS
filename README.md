# MDS

Projeto desenvolvido para a disciplina de laboratório de Engenharia de Software

# 🛠️ How to run

* Instale o Docker
* Clone o repositório em um arquivo local
* Crie um arquivo .env na raíz do projeto ( onde estao localizadas as pastas backend e frontend)
* Preencha o .env criado na raíz da forma:
```
POSTGRES_USER="root"
POSTGRES_DB="BabyCare"
POSTGRES_PASSWORD="123"
```
* Entre na pasta backend ( onde esta localizada a pasta init.sql ) e crie outro arquivo .env
* Preencha o .env criado na pasta backend da forma:
```
PORT=3000
JWT_SECRET=16a69ef01cd781804e676abe930608bf7c5a4F7a58990d03b22437aF78F40dbb
POSTGRES_HOST_DEV=database
POSTGRES_USER_DEV=root
POSTGRES_DB_DEV=BabyCare
POSTGRES_PASSWORD_DEV=123
POSTGRES_PORT_DEV=5432
API_KEY=AIzaSyByl-FmUgJkLOndCFK12V40_ftqN-5Eulo
AUTH_DOMAIN=babycare-13cef.firebaseapp.com
PROJECT_ID=babycare-13cef
STORAGE_BUCKET=babycare-13cef.appspot.com
MESSAGING_SENDER_ID=933741109017
APP_ID=1:933741109017:web:c65e840d081d2894b36f88

```
* Navegue até a pasta raíz do projeto no terminal ( pasta onde está localizado o arquivo docker-compose.yaml )
* Na raíz do projeto, digitar "sudo docker compose up" (linux) ou "docker compose up" (windows) e aguardar alguns segundos
* O front end será exibido em http://localhost:8080
* O back end estará rodando em http://localhost:3000
