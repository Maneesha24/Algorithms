const helloWorld = require("./helloWorld.js");

test("prints hello world", () => {
  expect(helloWorld("Hello world!")).toBe("Hello world!");
});
