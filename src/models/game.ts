export class Game{
    public player_images: string[] = [];
    public players: string[] = [];
    public stack: string[] = [];
    public playedCard:string[] = [];
    public currentPlayer: number = 0;
    public pickCardAnimation = false;
    public currentCard: string = '';

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push("ace_" + i);
            this.stack.push("clubs_" + i);
            this.stack.push("diamonds_" + i);
            this.stack.push("hearts_" + i);
        }

        shuffle(this.stack);
  }
  
  public toJson() {
    return {
      players: this.players,
      stack: this.stack,
      playedCard: this.playedCard,
      currentPlayer: this.currentPlayer,
      pickCardAnimation: this.pickCardAnimation,
      currentCard: this.currentCard,
      player_images: this.player_images
    };
  }
}

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length;
  let temporaryValue: T;
  let randomIndex: number;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
      
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  
  return array;
}
