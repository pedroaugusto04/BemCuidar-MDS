import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./routers/user.router";
import { loginRouter } from "./routers/login.router";
import { serviceProviderRouter } from "./routers/service-provider.router";
import { multerMiddleware } from "./middlewares/fileParser";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => console.log(`Express rodando na porta 3000`));

app.get("/ping", (_req, res) => {
  res.status(200).json({ message: "A API está online" });
});

app.use(multerMiddleware);
app.use(loginRouter);
app.use(userRouter);
app.use(serviceProviderRouter);

// Swagger, apenas para desenvolvimento. Nao vai rodar no docker porque
// o docker nao instala as dependencias de desenvolvimento. Para rodar, usar:
// `npm run develop` no diretorio do backend (precisa das dependencias de dev)
// o swagger vai ficar em /swagger
// - @pejacome
if (process.env.NODE_ENV == "development") {
  const { swaggerDocs } = require("./utils/swagger");
  swaggerDocs(app);
}