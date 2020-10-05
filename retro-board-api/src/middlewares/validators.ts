import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";

import Task from "../entities/Task";
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
  validateTask: async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const { content, columnId } = request.body;

    const errors = await validate(new Task({ content, column: columnId }));

    if (errors.length > 0) {
      response.status(400).send(errors.map((error) => error.constraints));
      return;
    }

    const referencedColumn = await getRepository(BoardColumn).findOne(columnId);

    if (referencedColumn === undefined) {
      response.status(400).send(`Column with id "${columnId}" does not exist!`);
      return;
    }

    next();
  },
};

export default Validators;
