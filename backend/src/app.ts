import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => console.log(`Express rodando na porta 3000`));

app.get("/ping", (_req, res) => {
  res.status(200).json({ message: "A API está online" });
});
