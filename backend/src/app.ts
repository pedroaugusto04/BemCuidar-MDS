import express from "express";
import { userRouter } from "./routers/user.router";
import { loginRouter } from "./routers/login.router";

// firebase storage config
var admin = require("firebase-admin");

var serviceAccount = require("./config/firebase_credential/firebaseCredential.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => console.log(`Express rodando na porta 3000`));

app.get("/ping", (_req, res) => {
  res.status(200).json({ message: "A API está online" });
});

app.use(loginRouter);
app.use(userRouter);
