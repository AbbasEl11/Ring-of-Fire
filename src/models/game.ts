export class Game{
    public players: string[] = [];
    public stack: string[] = [];
    public playedCard:string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push("ace_" + i);
            this.stack.push("clubs_" + i);
            this.stack.push("diamonds_" + i);
            this.stack.push("hearts_" + i);
        }

        shuffle(this.stack);
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
