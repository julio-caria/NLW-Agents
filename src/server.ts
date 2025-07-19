// Arquivo necessário para configuração e execução do aplicação

import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'
import { env } from './env.ts'
import { createRoomRoute } from './http/routes/create-room.ts'
import { getRoomQuestions } from './http/routes/get-room-questions.ts'
import { getRoomsRoute } from './http/routes/get-rooms.ts'

const app = fastify().withTypeProvider<ZodTypeProvider>()

// Registrando qual frontend estará acessando a aplicação
app.register(fastifyCors, {
  origin: 'http://localhost:5173',
})

app.get('/health', () => {
  return 'OK'
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(getRoomsRoute)
app.register(createRoomRoute)
app.register(getRoomQuestions)

app.listen({ port: env.PORT })
