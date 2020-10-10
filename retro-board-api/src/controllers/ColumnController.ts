import { Request, Response } from "express";
import { getRepository } from "typeorm";

import BoardColumn from "../entities/BoardColumn";

const ColumnController = {
  add: async (request: Request, response: Response) => {
    const { title } = request.body;

    const newColumn = await getRepository(BoardColumn).save(
      new BoardColumn(title)
    );

    response.status(200).json(newColumn);
  },

  getAll: async (request: Request, response: Response) => {
    const allColumns = await getRepository(BoardColumn).find()
    response.status(200).json(allColumns)
  }
};

export default ColumnController;
