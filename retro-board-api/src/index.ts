import "reflect-metadata";
import { createConnection } from "typeorm";

import app from "./app";

const PORT = 8080;

createConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server started at http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log(error));
