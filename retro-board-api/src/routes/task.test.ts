import request from "supertest";

import { databaseTest } from "../utilities/testUtilities";

import app from "../app";
import BoardColumn from "../entities/BoardColumn";
import { getRepository } from "typeorm";

describe("Column Router", () => {
  databaseTest();
  describe("POST /column", () => {
    it("should respond with 200 when there is no problem to create entity", async (done) => {
      const { id: columnId } = await getRepository(BoardColumn).save({
        title: "my-title",
      });

      request(app)
        .post("/task")
        .send({ content: "First issue", columnId })
        .expect(200, done);
    });

    it("should respond with 400 when content is empty", async (done) => {
      const { id: columnId } = await getRepository(BoardColumn).save({
        title: "my-title",
      });

      request(app).post("/task").send({ columnId }).expect(400, done);
    });
    it("should respond with 400 when column id is empty", (done) => {
      request(app)
        .post("/task")
        .send({ content: "My first issue" })
        .expect(400, done);
    });

    it("should respond with 400 when referenced column does not exist", async () => {
      await request(app)
        .post("/task")
        .send({
          content: "My first issue",
          columnId: "aaa",
        })
        .expect(400);
    });
  });
});
