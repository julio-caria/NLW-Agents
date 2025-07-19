// Arquivo necessário para configuração e execução do aplicação
import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { fastifyCors } from '@fastify/cors'
import { env } from './env.ts'
import { getRoomsRoute } from './http/routes/get-rooms.ts';
import { createRoomRoute } from './http/routes/create-room.ts';

const app = fastify().withTypeProvider<ZodTypeProvider>();

// Registrando qual frontend estará acessando a aplicação
app.register(fastifyCors, {
  origin: 'http://localhost:5173',
})

app.get('/health', () => {
  return 'OK';
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(getRoomsRoute)
app.register(createRoomRoute)

app.listen({ port: env.PORT })
