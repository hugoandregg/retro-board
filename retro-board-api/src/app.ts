import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";

import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger';

import routes from "./routes";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

// Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/api-docs.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

app.use(routes);

export default app;
