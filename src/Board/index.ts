import { Category } from "../AllQuestionsSets";

class Board {
  static computeCurrentCategory = (position: number): Category => {
    // 9/4 = 2 * 4 + 1
    // 2: quotient
    // 1: remainder (modulo: %)

    switch (position % 4) {
      case 0:
        return "Pop";
      case 1:
        return "Science";
      case 2:
        return "Sports";
      case 3:
        return "Rock";
    }
  };
}

export default Board;
