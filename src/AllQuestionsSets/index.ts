import QuestionsSet from "../QuestionsSet";

const createTestQuestions = (category: Category): string[] =>
  [...Array(50)].map((_, index) => `${category} Question ${index}`);

export type Category = "Pop" | "Science" | "Sports" | "Rock";

class AllQuestionsSets {
  private questions: Record<Category, QuestionsSet>;

  constructor() {
    this.questions = {
      Pop: new QuestionsSet(createTestQuestions("Pop")),
      Science: new QuestionsSet(createTestQuestions("Science")),
      Sports: new QuestionsSet(createTestQuestions("Sports")),
      Rock: new QuestionsSet(createTestQuestions("Rock")),
    };
  }

  ask = (category: Category): string => {
    return this.questions[category].ask();
  };
}

export default AllQuestionsSets;
