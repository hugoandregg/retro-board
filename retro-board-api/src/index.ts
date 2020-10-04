import express, { Request, Response } from "express";
const app = express();

const PORT = 8080;

app.get("/", (request: Request, response: Response) => {
  response.send("Hello world!");
});

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
