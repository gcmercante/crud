# CRUD

Bem vindo ao CRUD.

Para garantir que você irá conseguir inicializar as aplicações primeiro você precisa fazer algumas coisas:

1. Garantir que você tenha um .env na app de backend e outro .env na app de frontend. (Você pode usar o .env.sample como base para isso)
2. Validar na app backend se seu arquivo ormconfig.json está com as configurações de banco corretas caso você já tenha um serviço MySQL rodando, caso não tenha, não se preocupe que o docker-compose desse projeto irá subir um serviço desse para você
3. Garantir que você tenha tanto o Docker quanto o Docker Compose instalados na sua máquina, caso não tenha de uma olhada nesses dois links abaixo:
    1. [Docker](https://docs.docker.com/engine/install/)
    2. [Docker Compose](https://docs.docker.com/compose/install/)
## Subindo o ambiente
Depois de preparar a sua máquina está na hora de subir o ambiente, para isso abra o terminal do Linux e clone esse repositório com o comando abaixo e entre na pasta:

```
git clone git@github.com:gcmercante/crud.git
cd ~/crud
```
Agora você terá a aplicação de frontend e de backend e arquivos para subir os containers.  
O próximo comando irá inicializar os containers, tanto das aplicações backend e frontend, quanto o MySQL.
```
bash container.sh
```

Após finalizado você poderá validar se os containers estão *up* com o comando
```
docker ps
```
Confirmando que os containers estão *up* você poderá rodar as migrations, para isso você irá utilizar o seguinte comando
```
bash container.sh --migration
```
O comando irá gerar os arquivos de migration, caso exista alguma migration a ser feita e irá executar as que forem criadas

Feito todos os passos você só vai precisar abrir seu navegador e utilizar a aplicação
```
http://localhost:3000
```

## Tecnologias utilizadas
### Backend
* NodeJs
* TypeORM
* TypeScript
* MySQL

### Frontend
* NodeJs
* React