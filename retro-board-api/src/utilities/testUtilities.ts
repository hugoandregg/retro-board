import * as typeorm from "typeorm";
import { createConnection } from "typeorm";

import BoardColumn from "../entities/BoardColumn";
import Task from "../entities/Task";

export const databaseTest = () => {
  beforeEach(() => {
    return createConnection({
      type: "sqlite",
      database: ":memory:",
      dropSchema: true,
      entities: [BoardColumn, Task],
      synchronize: true,
      logging: false,
    });
  });

  afterEach(() => {
    let conn = typeorm.getConnection();
    return conn.close();
  });
};
