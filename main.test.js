import { singTwelveDays } from "./main.js";
//👉 Write your tests below here:
test(`Should produce array of arrays with one more day of Christmas each time`, () => {
  // arrange
  const array = [
    "12 drummers drumming",
    "11 pipers piping",
    "10 lords a leaping",
    "9 ladies dancing",
    "8 maids a milking",
    "7 swans a swimming",
    "6 geese a laying",
    "5 golden rings",
    "4 calling birds",
    "3 French hens",
    "2 turtle doves",
    "1 partridge in a pear tree",
  ];
  const expected = [
    ["1 partridge in a pear tree"],
    ["1 partridge in a pear tree", "2 turtle doves"],
    ["1 partridge in a pear tree", "2 turtle doves", "3 French hens"],
    [
      "1 partridge in a pear tree",
      "2 turtle doves",
      "3 French hens",
      "4 calling birds",
    ],
    [
      "1 partridge in a pear tree",
      "2 turtle doves",
      "3 French hens",
      "4 calling birds",
      "5 golden rings",
    ],
    [
      "1 partridge in a pear tree",
      "2 turtle doves",
      "3 French hens",
      "4 calling birds",
      "5 golden rings",
      "6 geese a laying",
    ],
    [
      "1 partridge in a pear tree",
      "2 turtle doves",
      "3 French hens",
      "4 calling birds",
      "5 golden rings",
      "6 geese a laying",
      "7 swans a swimming",
    ],
    [
      "1 partridge in a pear tree",
      "2 turtle doves",
      "3 French hens",
      "4 calling birds",
      "5 golden rings",
      "6 geese a laying",
      "7 swans a swimming",
      "8 maids a milking",
    ],
    [
      "1 partridge in a pear tree",
      "2 turtle doves",
      "3 French hens",
      "4 calling birds",
      "5 golden rings",
      "6 geese a laying",
      "7 swans a swimming",
      "8 maids a milking",
      "9 ladies dancing",
    ],
    [
      "1 partridge in a pear tree",
      "2 turtle doves",
      "3 French hens",
      "4 calling birds",
      "5 golden rings",
      "6 geese a laying",
      "7 swans a swimming",
      "8 maids a milking",
      "9 ladies dancing",
      "10 lords a leaping",
    ],
    [
      "1 partridge in a pear tree",
      "2 turtle doves",
      "3 French hens",
      "4 calling birds",
      "5 golden rings",
      "6 geese a laying",
      "7 swans a swimming",
      "8 maids a milking",
      "9 ladies dancing",
      "10 lords a leaping",
      "11 pipers piping",
    ],
    [
      "1 partridge in a pear tree",
      "2 turtle doves",
      "3 French hens",
      "4 calling birds",
      "5 golden rings",
      "6 geese a laying",
      "7 swans a swimming",
      "8 maids a milking",
      "9 ladies dancing",
      "10 lords a leaping",
      "11 pipers piping",
      "12 drummers drumming",
    ],
  ];

  // act
  const actual = singTwelveDays(array);
  // assert

  expect(actual).toStrictEqual(expected);
});
