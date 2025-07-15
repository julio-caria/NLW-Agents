# 📘 NLW Agents Rocketseat — Anotações Completas (Aula 1, 2 e 3)

## 🧭 Índice

1. [Visão Geral do Evento NLW Agents](#visão-geral-do-evento-nlw-agents)

2. [Aula 1 — Setup do Projeto Full Stack](#aula-1--setup-do-projeto-full-stack)
   - [Tecnologias Utilizadas](#tecnologias-utilizadas)
   - [Configuração do Back-end](#configuração-do-back-end)
   - [Configuração do Front-end](#configuração-do-front-end)
   - [Boas Práticas e Dicas](#boas-práticas-e-dicas)

3. [Aula 2 — Integração Front-end e Back-end](#aula-2--integração-front-end-e-back-end)
   - [Resumo Geral](#resumo-geral)
   - [Principais Implementações no Back-end](#principais-implementações-no-back-end)
   - [Principais Implementações no Front-end](#principais-implementações-no-front-end)
   - [Boas Práticas e Dicas](#boas-práticas-e-dicas-1)

4. [Aula 3 — Gravação de Áudio e IA com Gemini](#aula-3--gravação-de-áudio-e-ia-com-gemini)
   - [Resumo Geral](#resumo-geral-1)
   - [Implementação de Gravação de Áudio (Front-end)](#implementação-de-gravação-de-áudio-front-end)
   - [Implementação de Processamento de Áudio e IA (Back-end)](#implementação-de-processamento-de-áudio-e-ia-back-end)
   - [Boas Práticas e Dicas](#boas-práticas-e-dicas-2)
5. [Glossário de Termos Importantes](#glossário-de-termos-importantes)
6. [Referências e Recursos](#referências-e-recursos)

---

## 🎯 Visão Geral do Evento NLW Agents

O **NLW Agents** é um evento prático da Rocketseat com foco em construir uma aplicação full stack moderna, integrando:

- Back-end com Node.js + Fastify + PostgreSQL
- Front-end com React + Vite + Tailwind
- Inteligência Artificial com a API Gemini
- Busca semântica com embeddings e pgvector

O objetivo é capacitar desenvolvedores de todos os níveis a construir soluções reais com tecnologias modernas e práticas profissionais.

---

## 📦 Aula 1 — Setup do Projeto Full Stack

### 🛠️ Tecnologias Utilizadas

| Tecnologia         | Finalidade |
|--------------------|------------|
| Node.js + TypeScript | Back-end com tipagem segura |
| Fastify            | Framework HTTP leve e rápido |
| PostgreSQL + pgvector | Banco de dados relacional com suporte a vetores |
| Drizzle ORM        | ORM type-safe |
| Zod                | Validação de schemas |
| Docker             | Containerização do banco |
| Biome              | Linter e formatador |
| React + Vite       | Front-end moderno |
| Tailwind CSS       | Estilização utilitária |
| shadcn/ui          | Componentes UI prontos |
| React Router DOM   | Navegação entre páginas |
| React Query        | Gerenciamento de dados e cache |

---

### ⚙️ Configuração do Back-end

- Projeto em TypeScript com suporte nativo via `--loader ts-node/esm`
- Estrutura modular: rotas, schemas, banco, validação
- Banco PostgreSQL com Docker e extensão `pgvector`
- ORM Drizzle para criar tabelas e migrações
- Scripts úteis:
  - `npm run dev`
  - `npm run db:seed`
  - `npx drizzle-kit push`
- Validação de dados com Zod
- Lint e formatação com Biome

---

### 🖥️ Configuração do Front-end

- Projeto criado com Vite + React
- Tailwind CSS + shadcn/ui para UI
- React Router DOM para rotas
- React Query para chamadas HTTP
- Hooks personalizados para consumo da API

---

### ✅ Boas Práticas e Dicas

#### Iniciantes

- Entenda o fluxo completo: back → front
- Use Docker para isolar serviços
- Explore o terminal e scripts npm

#### Intermediários

- Aprofunde-se em TypeScript
- Use Zod para validação robusta
- Explore o Drizzle ORM

#### Avançados

- Personalize o Docker Compose
- Implemente testes automatizados
- Explore IA e embeddings com pgvector

---

## 🔗 Aula 2 — Integração Front-end e Back-end

### 📌 Resumo Geral

- Integração entre front-end e back-end
- Criação e listagem de salas e perguntas
- Validação de dados com Zod
- Atualização de dados com React Query

---

### 🧩 Principais Implementações no Back-end

- Criação da tabela `questions`
- Rotas:
  - `POST /rooms`
  - `GET /rooms`
  - `GET /rooms/:roomId/questions`
  - `POST /rooms/:roomId/questions`
- Uso de `LEFT JOIN` e `COUNT` para contagem de perguntas por sala

---

### 🎨 Principais Implementações no Front-end

- Listagem de salas com badges
- Formulário de criação de sala
- Listagem de perguntas por sala
- Formulário de envio de pergunta
- Navegação com React Router
- Atualização com React Query

---

### 💡 Boas Práticas e Dicas

- Valide dados no back-end sempre
- Use `invalidateQueries` para manter sincronismo
- Separe hooks e componentes
- Use `key` em listas renderizadas

---

## 🎙️ Aula 3 — Gravação de Áudio e IA com Gemini

### 📌 Resumo Geral

- Gravação de áudio no navegador
- Upload para o back-end
- Transcrição com IA (Gemini)
- Geração de embeddings
- Armazenamento no banco para busca semântica

---

### 🎤 Implementação de Gravação de Áudio (Front-end)

- Uso da API `MediaRecorder`
- Controle com `useState` e `useRef`
- Upload com `FormData` para `/rooms/:roomId/audio`

---

### 🧠 Implementação de Processamento de Áudio e IA (Back-end)

- Upload com `fastify-multipart`
- Transcrição com Gemini API
- Embeddings com modelo `text-embedding-004`
- Armazenamento na tabela `audio_chunks`

---

### 💡 Boas Práticas e Dicas

- Divida funcionalidades complexas
- Valide arquivos antes de processar
- Use hooks personalizados
- Armazene embeddings com tipo `vector`

---

## 📚 Glossário de Termos Importantes

| Termo              | Definição |
|--------------------|----------|
| API REST           | Interface HTTP com métodos como GET, POST etc. |
| ORM                | Mapeamento objeto-relacional |
| Migração           | Script para alterar estrutura do banco |
| Container          | Ambiente isolado via Docker |
| Hot Reload         | Atualização automática ao salvar arquivos |
| Validação de Schema| Verificação de formato/tipo de dados |
| Embeddings         | Vetores que representam significado de textos |
| Busca Semântica    | Busca por contexto, não apenas palavras |
| Gemini API         | API de IA do Google para transcrição e embeddings |
| MediaRecorder API  | API do navegador para gravação de mídia |

---

## 🔗 Referências e Recursos

- [📁 Repositório Back-end](https://github.com/rocketseat-education/nlw-agents-aulas-server)
- [📁 Repositório Front-end](https://github.com/rocketseat-education/nlw-agents-aulas-web)
- [📺 Aula 1 (YouTube)](https://www.youtube.com/watch?v=gBTiQNF7ZXI)
- [📺 Aula 2 (YouTube)](https://www.youtube.com/watch?v=17CO2twuLOM)
- [📺 Aula 3 (YouTube)](https://www.youtube.com/watch?v=lEU8IPsyjLM)
- [📘 Blog Rocketseat](https://rocketseat.com.br/blog)
- [🚀 Formação React](https://www.rocketseat.com.br/formacao/react)

---

> ✍️ Essas anotações servem como um guia completo para quem está acompanhando o NLW Agents, com foco em aprendizado prático, boas práticas de desenvolvimento e uso de tecnologias modernas no mercado.
