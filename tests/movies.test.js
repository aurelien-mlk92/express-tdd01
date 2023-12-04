const request = require("supertest");
const app = require("../app");

describe("get /movies", () => {
  test("Should return a list of movies", async () => {
    const response = await request(app).get("/movies");
    expect(response.status).toBe(200);
    expect(response.body.length).not.toBe(0);
  });
});

describe("get /movies/:id", () => {
  test("should return movie filtered by id", async () => {
    const response = await request(app).get("/movies/1");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("Should return empty data with 404 status code", async () => {
    const response = await request(app).get("/movies/0");
    expect(response.status).toBe(404);
  });
});
