import express, { Request, Response } from "express";
import "reflect-metadata";
import { createConnection } from "typeorm";

const app = express();

const PORT = 8080;

app.get("/", (request: Request, response: Response) => {
  response.send("Hello world!");
});

createConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server started at http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
