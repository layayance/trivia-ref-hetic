import QuestionsSet from "../QuestionsSet";

const createTestQuestions = (category: Category): string[] =>
  [...Array(50)].map((_, index) => `${category} Question ${index}`);

// Array(50)
// { length: 50 }
// [...Array(50)]
// { 0: undefined, 1: undefined, …, 49: undefined, length: 50}

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
    const categoryQuestions = this.questions[category];
    if (categoryQuestions) {
      return categoryQuestions.ask();
    }
    return "No questions available for this category.";
  };
}


export default AllQuestionsSets;
