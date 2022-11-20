import { PrismaClient } from "@prisma/client";
import express, { application, json } from "express";

const prisma = new PrismaClient();

const app = express();

app.use(json());

app.get("/", async (req, res) => {
  res.send("Tudo certo");
});

app.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await prisma.user.create({
    data: { name, email, password },
  });
  return res.json({ user });
});

app.listen(3000, () => {
  console.log("The app is listening on port 3000");
});
