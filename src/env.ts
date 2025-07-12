//  Arquivo é utilizado para validação das variáveis ambientes.
import { z } from 'zod'

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
})

export const env = envSchema.parse(process.env)