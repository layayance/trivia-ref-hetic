import Board from ".";

describe("Test of Board.computeCurrentCategory", () => {
  test("Pop", () => {
    expect(Board.computeCurrentCategory(0)).toEqual("Pop");
  });

  test("Pop", () => {
    expect(Board.computeCurrentCategory(4)).toEqual("Pop");
  });

  test("Pop", () => {
    expect(Board.computeCurrentCategory(8)).toEqual("Pop");
  });

  test("Science", () => {
    expect(Board.computeCurrentCategory(1)).toEqual("Science");
  });

  test("Science", () => {
    expect(Board.computeCurrentCategory(5)).toEqual("Science");
  });

  test("Science", () => {
    expect(Board.computeCurrentCategory(9)).toEqual("Science");
  });

  test("Sports", () => {
    expect(Board.computeCurrentCategory(2)).toEqual("Sports");
  });

  test("Sports", () => {
    expect(Board.computeCurrentCategory(6)).toEqual("Sports");
  });

  test("Sports", () => {
    expect(Board.computeCurrentCategory(10)).toEqual("Sports");
  });

  test("Rock", () => {
    expect(Board.computeCurrentCategory(3)).toEqual("Rock");
  });

  test("Rock", () => {
    expect(Board.computeCurrentCategory(7)).toEqual("Rock");
  });

  test("Rock", () => {
    expect(Board.computeCurrentCategory(11)).toEqual("Rock");
  });
});

describe("Test of Board.shiftPosition", () => {
  test("One moves forward", () => {
    expect(Board.shiftPosition(0, 1)).toEqual(1);
  });

  test("One moves forward", () => {
    expect(Board.shiftPosition(1, 5)).toEqual(6);
  });

  test("One circles the board", () => {
    expect(Board.shiftPosition(10, 5)).toEqual(3);
  });
});
