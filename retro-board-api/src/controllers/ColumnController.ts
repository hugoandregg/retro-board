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
};

export default ColumnController;
