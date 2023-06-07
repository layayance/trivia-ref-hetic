import Board from "../Board";

class Player {
  private position = 0;
  private coins = 0;

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
    return this.coins === 6;
  };

  deprecatedGetName = (): string => this.name;

  deprecatedGetPosition = (): number => this.position;
}

export default Player;
