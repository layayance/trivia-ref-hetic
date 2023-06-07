import Board from "../Board";

class Player {
  private position = 0;
  private coins = 0;
  private isInPenaltyBox = false;

  constructor(private name: string) {}

  move = (roll: number): number => {
    this.position = Board.shiftPosition(this.position, roll);
    return this.position;
  };

  earnACoin = (): number => {
    this.coins += 1;
    console.log(`${this.name} earned a coin and consequently has ${this.coins} point(s).`);
    return this.coins;
  };

  playerWins = (): boolean => {
    const playerWins = this.coins === 6;
    if (playerWins) {
      console.log(`${this.name} won the game.`);
    }
    return playerWins;
  };

  deprecatedGetName = (): string => this.name;

  deprecatedGetPosition = (): number => this.position;

  deprecatedSetInPenaltyBox = (): void => {
    this.isInPenaltyBox = true;
  };

  deprecatedFreeOfPenaltyBox = (): void => {
    this.isInPenaltyBox = false;
  };

  deprecatedIsInPenaltyBox = (): boolean => this.isInPenaltyBox;
}

export default Player;
