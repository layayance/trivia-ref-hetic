import QuestionsSet from ".";

test("Questions should be asked one after the other", () => {
  // GIVEN
  const questionsSet = new QuestionsSet(["Question 1", "Question 2", "Question 3"]);

  // WHEN
  const actual = questionsSet.ask();

  // THEN
  expect(actual).toEqual("Question 1");
});

test("Questions should be asked one after the other", () => {
  // GIVEN
  const questionsSet = new QuestionsSet(["Question 1", "Question 2", "Question 3"]);
  questionsSet.ask();

  // WHEN
  const actual = questionsSet.ask();

  // THEN
  expect(actual).toEqual("Question 2");
});
