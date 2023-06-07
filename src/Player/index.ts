class Player {
  constructor(private name: string) {}

  deprecatedGetName = (): string => this.name;
}

export default Player;
