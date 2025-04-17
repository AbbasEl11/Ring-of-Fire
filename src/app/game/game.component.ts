import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { inject } from '@angular/core';


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule,PlayerComponent,MatIconModule,MatButtonModule,GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  pickCardAnimation = false;
  currentCard: string = "";
  game!: Game;
  private firestore: Firestore;

  constructor(public dialog: MatDialog) { 
      this.firestore = inject(Firestore);
  }

  ngOnInit(): void {
  this.newGame();
  let itemsCollection = collection(this.firestore, 'items');
  collectionData(itemsCollection).subscribe((game) => {
    console.log('Game Update', game);
    });
  }

  takeCard() {
    if (!this.pickCardAnimation) {
    this.currentCard = this.game.stack.pop()!;
    this.pickCardAnimation = true;
    console.log(this.game);
      
    this.game.currentPlayer++;
    this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
    
    setTimeout(() => {
      this.game.playedCard.push(this.currentCard);
      this.pickCardAnimation = false;
    }, 1000);
  }
  }
  
  newGame() {
    this.game = new Game();
   }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      if (name && name.length > 0) {
        this.game.players.push(name);
      }
    });
  }
}

