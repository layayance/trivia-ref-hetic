import Player from "../Player";

class AllPlayers {
  private players: Player[] = [];
  private currentPlayerIndex: number = 0;

  add = (player: Player): void => {
    this.players.push(player);
    console.log(
      `New player added: ${player.deprecatedGetName()}; their place is 0 and they have 0 coins. They are NOT in the penalty box.`
    );
  };

  switchToNextPlayer = (): Player => {
    const numberOfPlayers = this.players.length;
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % numberOfPlayers;
    return this.players[this.currentPlayerIndex];
  };

  getCurrentPlayer = (): Player => {
    return this.players[this.currentPlayerIndex];
  };
}

export default AllPlayers;
