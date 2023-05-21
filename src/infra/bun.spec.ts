
describe("Bun", () => {
  it("should return instance of hono", async () => {
    const exported = require("./bun").default;

    expect(exported).toHaveProperty("port", 3000);
    expect(exported).toHaveProperty("fetch");
  });
});
