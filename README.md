# Next.js SAJira App

para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- El -d, significa **detached**

- MongoDB URL localhost

```
mongo://localhost:27017/entriesdb
```

## Configurar las variables de entorno

```
renombrar el archivo __.env.template__ a __.env__
```

## Llenar la base de datos con informacion de prueba

Llamar a:

```
http://localhost:3000/api/seed
```
