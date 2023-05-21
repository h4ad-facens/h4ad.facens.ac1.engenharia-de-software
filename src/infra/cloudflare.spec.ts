import { Hono } from "hono";

describe("Cloudflare", () => {
  it("should return instance of hono", async () => {
    const hono = require("./cloudflare").default;

    expect(hono).toBeInstanceOf(Hono);
  });
});
