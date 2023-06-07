import Player from "../Player";

class AllPlayers {
  private players: Player[] = [];
  private currentPlayerIndex: number = 0;

  add = (player: Player): void => {
    this.players.push(player);
  };

  switchToNextPlayer = (): Player => {
    const numberOfPlayers = this.players.length;
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % numberOfPlayers;
    return this.players[this.currentPlayerIndex];
  };
}

export default AllPlayers;
