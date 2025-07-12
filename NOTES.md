# RocketSeat - NLW Agents

## Iniciando Projeto

  ```bash
    npm i typescript  @types/node -D
    npx tsc --init
    npm i fastify @fasitfy/cors fastify-type-provider-zod zod
  ```

- Arquivo `tsconfig.json`:
    Base para configuração - Clique [aqui](https://github.com/tsconfig/bases)

    ```json
      {
        "$schema": "https://json.schemastore.org/tsconfig",
        "display": "Node 22",
        "type": "module",
        "_version": "22.0.0",
        "compilerOptions": {
          "lib": [
            "es2024",
            "ESNext.Array",
            "ESNext.Collection",
            "ESNext.Iterator"
          ],
          "module": "nodenext",
          "target": "es2022",
          // TypeScript Utilizado  para apenas checagem de tipos e não para bundling
          "noEmit": true,
          "strict": true,
          "esModuleInterop": true,
          "skipLibCheck": true,
          "moduleResolution": "node16"
        }
      }
    ```

## Instanciando Servidor

Para instanciar um servidor local com fastify, você deverá criar um diretório `src/server.ts`, neste arquivo você deverá importar as dependências do fastify, e utilizar a instância do fastify para seu "servidor":

```ts
import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { fastifyCors } from '@fastify/cors'
import { env } from './env.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>();

// Registrando qual frontend estará acessando a aplicação
app.register(fastifyCors, {
  origin: 'http://localhost:5173',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.listen({ port: env.PORT })
```

> Busca por similaridade: Procura identificar itens que compartilham características relevantes, mesmo que não sejam idênticos.
> No contexto de tecnologia e ciência de dados, a busca por similaridade é frequentemente implementada por meio de representações vetoriais (embeddings), onde textos, imagens, sons ou outros tipos de dados são transformados em vetores numéricos de alta dimensão. A similaridade entre esses vetores é então calculada usando métricas como distância euclidiana, similaridade de cosseno ou outras funções matemáticas específicas.

## Configurando o Docker

Configuramos o nosso arquivo `docker-compose.yml` da seguitne forma:

```yml
services: 
  nlw-agents-ng:
    image: pgvector/pgvector:pg17
    environment: 
      POSTGRES_USER: docker
      POSTGRES_PASSWORD: docker
      POSTGRES_DB: agents
    ports: 
      - "5432:5432"
    volumes: 
      - ./docker/setup.sql:/docker-entrypoint-initdb.d/setup.sql
```

```bash
docker compose up -d
```

## Estruturando o banco de Dados

Para esse projeto estamos utilizando o Drizzle ORM em conjunto com o Drizzle kit, para que tudo ocorra como imaginamos, podemos executar a seguinte cadeia de comandos:

```bash
npx drizzle generate
```

<!-- 47:24 -->