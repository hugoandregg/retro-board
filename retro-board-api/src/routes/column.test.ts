import request from "supertest";
import * as typeorm from "typeorm";
import { createConnection } from "typeorm";

import app from "../app";
import BoardColumn from "../entities/BoardColumn";
import Task from "../entities/Task";

export const asMock = (obj: any): jest.Mock => obj as jest.Mock;

describe("Column Router", () => {
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
  describe("POST /column", () => {
    it("should respond with 200 when there is no problem to create entity", (done) => {
      request(app)
        .post("/column")
        .send({ title: "my-title" })
        .expect(200, done);
    });

    it("should respond with 400 when title is empty", (done) => {
      request(app).post("/column").send({ title: undefined }).expect(400, done);
    });
  });
});
