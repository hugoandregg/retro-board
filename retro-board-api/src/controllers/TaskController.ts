import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Task from "../entities/Task";

const ColumnController = {
  add: async (request: Request, response: Response) => {
    const { columnId, content } = request.body;

    const newTask = await getRepository(Task).save(
      new Task({ column: columnId, content })
    );

    response.status(200).json(newTask);
  },

  getAll: async (request: Request, response: Response) => {
    const tasks = await getRepository(Task).find({});
    response.status(200).json(tasks);
  },

  delete: async (request: Request, response: Response) => {
    const uuid = request.params.uuid;
    const result = await getRepository(Task).delete({ id: uuid })
    response.status(200).json(result)
  },
};

export default ColumnController;
