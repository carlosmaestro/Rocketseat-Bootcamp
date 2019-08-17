### Create container postgres

```
$ docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

### Rodar a migration Sequelize

```bash
$ yarn sequelize db:migrate
```
