import Fastify from "fastify"
import cors from "@fastify/cors"
import { appRoutes } from "./routes"

const app = Fastify()

// Middlewares
app.register(cors)
app.register(appRoutes)

app.listen({
  port: 3333
})
  .then(() => console.log("Servidor rodando [localhost:3333]"))
