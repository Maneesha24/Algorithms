const capitalizeFirst = require("./capitalizeFirst.js");

test("To capitalize every first letter of words in an array", () => {
  expect(
    capitalizeFirst([
      "It's",
      "not",
      "who",
      "I am",
      "underneath",
      "but",
      "what",
      "I",
      "do",
      "that",
      "defines",
      "me."
    ])
  ).toEqual([
    "It's",
    "Not",
    "Who",
    "I am",
    "Underneath",
    "But",
    "What",
    "I",
    "Do",
    "That",
    "Defines",
    "Me."
  ]);
});

test("To capitalize every first letter of words in an array", () => {
  expect(
    capitalizeFirst([
      "I",
      "wont",
      "kill",
      "you",
      "but",
      "I",
      "don't",
      "have",
      "to",
      "save",
      "you."
    ])
  ).toEqual([
    "I",
    "Wont",
    "Kill",
    "You",
    "But",
    "I",
    "Don't",
    "Have",
    "To",
    "Save",
    "You."
  ]);
});

test("To capitalize every first letter of words in an array", () => {
  expect(
    capitalizeFirst([
      "Why",
      "do",
      "we",
      "fall",
      "sir?",
      "So",
      "we",
      "might",
      "learn",
      "to",
      "pick",
      "ourselves",
      "up."
    ])
  ).toEqual([
    "Why",
    "Do",
    "We",
    "Fall",
    "Sir?",
    "So",
    "We",
    "Might",
    "Learn",
    "To",
    "Pick",
    "Ourselves",
    "Up."
  ]);
});
