import request from "supertest";

import { databaseTest } from "../utilities/testUtilities";

import app from "../app";

describe("Column Router", () => {
  databaseTest();
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
