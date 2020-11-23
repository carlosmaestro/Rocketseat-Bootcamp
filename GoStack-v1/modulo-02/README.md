## Istalations

### Express

```bash
$ yarn add express
```

### Sucrase e Nodemon

```bash
$ yarn add sucrase nodemon -D
```

### eslint

```bash
$ yarn add eslint -D
```

#### eslint init

```bash
$ yarn eslint --init
```

#### eslint fix in folder

```bash
$ yarn eslint --fix src --ext .js
```

### Prettier, eslint-config-prettier

```bash
$ yarn add prettier eslint-plugin-prettier eslint-config-prettier -D
```

### sequelize, pg, pg-store

```bash
$ yarn add sequelize pg pg-hstore
```

### sequelize-cli

```bash
$ yarn add sequelize-cli -D
```

### Create container postgres

```
$ docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

### Rodar a migration Sequelize

```bash
$ yarn sequelize db:migrate
```

### Criar uma migration

```bash
$ yarn sequelize migration:create --name=create-users
```

### Add bcryptjs

```bash
$ yarn add bcryptjs
```

### Add yup

```bash
$ yarn add yup
```

### Add jsonwebtoken

```bash
$ yarn add jsonwebtoken
```
