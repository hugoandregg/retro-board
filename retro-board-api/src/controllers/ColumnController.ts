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
    // with tasks or not
    const { withTask } = request.query;
    const options = withTask === "true"
      ? { relations: ["tasks"] } : {}

    const columns = await getRepository(BoardColumn).find(options);
    response.status(200).json(columns);
  },

  get: async (request: Request, response: Response) => {
    const uuid = request.params.uuid;
    const column = await getRepository(BoardColumn).find({ where: { id: uuid } });
    if (column.length > 0) return response.status(200).json(column);
    return response.status(404).json({ message: "Column Not Found" });
  }

};

export default ColumnController;
