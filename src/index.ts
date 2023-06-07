export class Game {
  private players: Array<string> = [];
  private places: Array<number> = [];
  private purses: Array<number> = [];
  private inPenaltyBox: Array<boolean> = [];
  private currentPlayer: number = 0;
  private isGettingOutOfPenaltyBox: boolean = false;

  private popQuestions: Array<string> = [];
  private scienceQuestions: Array<string> = [];
  private sportsQuestions: Array<string> = [];
  private rockQuestions: Array<string> = [];

  constructor() {
    for (let i = 0; i < 50; i++) {
      this.popQuestions.push("Pop Question " + i);
      this.scienceQuestions.push("Science Question " + i);
      this.sportsQuestions.push("Sports Question " + i);
      this.rockQuestions.push(this.createRockQuestion(i));
    }
  }

  private createRockQuestion(index: number): string {
    return "Rock Question " + index;
  }

  public add(name: string) {
    this.players.push(name);
    this.places[this.howManyPlayers() - 1] = 0;
    this.purses[this.howManyPlayers() - 1] = 0;
    this.inPenaltyBox[this.howManyPlayers() - 1] = false;
    console.log(`New player added: ${name}; their place is 0 and they have 0 coins. They are NOT in the penalty box.`);
  }

  private howManyPlayers(): number {
    return this.players.length;
  }

  private deprecatedGetCurrentPlayerName = (): string => this.players[this.currentPlayer];

  public roll(roll: number) {
    if (this.inPenaltyBox[this.currentPlayer]) {
      if (roll % 2 != 0) {
        this.isGettingOutOfPenaltyBox = true;

        this.places[this.currentPlayer] = this.places[this.currentPlayer] + roll;
        if (this.places[this.currentPlayer] > 11) {
          this.places[this.currentPlayer] = this.places[this.currentPlayer] - 12;
        }

        this.askQuestion();
      } else {
        this.isGettingOutOfPenaltyBox = false;
      }
    } else {
      this.places[this.currentPlayer] = this.places[this.currentPlayer] + roll;
      if (this.places[this.currentPlayer] > 11) {
        this.places[this.currentPlayer] = this.places[this.currentPlayer] - 12;
      }
      console.log(
        `${this.deprecatedGetCurrentPlayerName()} rolled a ${roll} and their new position is ${
          this.places[this.currentPlayer]
        }.`
      );

      this.askQuestion();
    }
  }

  private askQuestion(): void {
    if (this.currentCategory() == "Pop") console.log(this.popQuestions.shift());
    if (this.currentCategory() == "Science") console.log(this.scienceQuestions.shift());
    if (this.currentCategory() == "Sports") console.log(this.sportsQuestions.shift());
    if (this.currentCategory() == "Rock") console.log(this.rockQuestions.shift());
  }

  private currentCategory(): string {
    if (this.places[this.currentPlayer] == 0) return "Pop";
    if (this.places[this.currentPlayer] == 4) return "Pop";
    if (this.places[this.currentPlayer] == 8) return "Pop";
    if (this.places[this.currentPlayer] == 1) return "Science";
    if (this.places[this.currentPlayer] == 5) return "Science";
    if (this.places[this.currentPlayer] == 9) return "Science";
    if (this.places[this.currentPlayer] == 2) return "Sports";
    if (this.places[this.currentPlayer] == 6) return "Sports";
    if (this.places[this.currentPlayer] == 10) return "Sports";
    return "Rock";
  }

  private didPlayerWin(): boolean {
    return this.purses[this.currentPlayer] == 6;
  }

  public wrongAnswer(): boolean {
    console.log(
      `${this.deprecatedGetCurrentPlayerName()} provided a wrong answer and consequently goes to penalty box.`
    );
    this.inPenaltyBox[this.currentPlayer] = true;

    this.currentPlayer += 1;
    if (this.currentPlayer == this.players.length) this.currentPlayer = 0;
    console.log(`The new current player is ${this.deprecatedGetCurrentPlayerName()}.`);

    return false;
  }

  public wasCorrectlyAnswered(): boolean {
    console.log(`${this.deprecatedGetCurrentPlayerName()} provided the correct answer.`);
    if (this.inPenaltyBox[this.currentPlayer]) {
      if (this.isGettingOutOfPenaltyBox) {
        this.inPenaltyBox[this.currentPlayer] = false;
        this.purses[this.currentPlayer] += 1;

        var winner = this.didPlayerWin();
        this.currentPlayer += 1;
        if (this.currentPlayer == this.players.length) this.currentPlayer = 0;

        return winner;
      } else {
        this.currentPlayer += 1;
        if (this.currentPlayer == this.players.length) this.currentPlayer = 0;
        return false;
      }
    } else {
      this.purses[this.currentPlayer] += 1;
      console.log(
        `${this.deprecatedGetCurrentPlayerName()} earned a coin and consequently has ${
          this.purses[this.currentPlayer]
        } point(s).`
      );

      var winner = this.didPlayerWin();
      if (winner) {
        console.log(`${this.deprecatedGetCurrentPlayerName()} won the game.`);
      }

      this.currentPlayer += 1;
      if (this.currentPlayer == this.players.length) this.currentPlayer = 0;
      console.log(`The new current player is ${this.deprecatedGetCurrentPlayerName()}.`);

      return winner;
    }
  }
}
