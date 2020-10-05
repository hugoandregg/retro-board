import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";

import BoardColumn from "../entities/BoardColumn";

const Validators = {
  validateColumn: async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const { title } = request.body;

    const errors = await validate(new BoardColumn(title));

    if (errors.length > 0) {
      response.status(400).send(errors);
      return;
    }

    next();
  },
};

export default Validators;
