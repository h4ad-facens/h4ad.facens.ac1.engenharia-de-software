import { Course } from "./course";

describe("Course", () => {
  it("ensure the fields are properly assigned", () => {
    const id = Math.random().toString(16).slice(2);
    const name = Math.random().toString(16).slice(2);
    const price = Math.random() * 100;

    const course = new Course(id, name, price);

    expect(course).toHaveProperty("id", id);
    expect(course).toHaveProperty("name", name);
    expect(course).toHaveProperty("price", price);
  });
});
