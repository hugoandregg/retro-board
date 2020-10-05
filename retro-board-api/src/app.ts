import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

import routes from "./routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.use(routes);

export default app;
