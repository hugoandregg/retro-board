import request from "supertest";
import app from "./app";
import swaggerSpec from './swagger';

describe("Swagger specs", () => {
  it ("Should get swagger specification", (done) => {
    request(app)
      .get('/api-docs.json')
      .expect(200, done)
      .expect('Content-Type', /json/)
      .expect(swaggerSpec);
  })
});
