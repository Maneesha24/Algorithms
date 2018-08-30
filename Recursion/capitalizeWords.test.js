const capitalizeWords = require("./capitalizeWords.js");

test("To capitalize every word in an array", () => {
  expect(
    capitalizeWords([
      "It's not who I am underneath but what I do that defines me."
    ])
  ).toEqual(["IT'S NOT WHO I AM UNDERNEATH BUT WHAT I DO THAT DEFINES ME."]);
});

test("To capitalize every word in an array", () => {
  expect(
    capitalizeWords(["I won't kill you but I don't have to save you."])
  ).toEqual(["I WON'T KILL YOU BUT I DON'T HAVE TO SAVE YOU."]);
});

test("To capitalize every word in an array", () => {
  expect(
    capitalizeWords([
      "Why do we fall sir? So we might learn to pick ourselves up."
    ])
  ).toEqual(["WHY DO WE FALL SIR? SO WE MIGHT LEARN TO PICK OURSELVES UP."]);
});
