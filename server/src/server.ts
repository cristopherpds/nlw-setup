import Fastify from "fastify"
import { PrismaClient} from "@prisma/client"


const app = Fastify()
const prisma = new PrismaClient()


app.get('/', async ()=>{
  const habist = await prisma.habit.findMany()
  return habist
})

app.listen({
  port: 3333,
}).then(() => {
  console.log("HTTP Server running!");
})