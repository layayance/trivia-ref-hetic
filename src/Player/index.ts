import Board from "../Board";

class Player {
  private position = 0;

  constructor(private name: string) {}

  move = (roll: number): number => {
    this.position = Board.shiftPosition(this.position, roll);
    return this.position;
  };

  deprecatedGetName = (): string => this.name;

  deprecatedGetPosition = (): number => this.position;
}

export default Player;
