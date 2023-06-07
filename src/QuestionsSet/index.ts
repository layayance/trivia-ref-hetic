class QuestionsSet {
  constructor(private questions: string[]) {}

  ask = (): string => {
    return this.questions.shift();
  };
}

export default QuestionsSet;
