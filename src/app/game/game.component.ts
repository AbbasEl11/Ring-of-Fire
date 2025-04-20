import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';
import { Firestore, collection, collectionData, query, addDoc, getDoc, doc, docData, updateDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { PlayerMobileComponent } from "../player-mobile/player-mobile.component";
import { EditPlayerComponent } from '../edit-player/edit-player.component';



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatIconModule, MatButtonModule, GameInfoComponent, PlayerMobileComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  game!: Game;
  items$!: Observable<any[]>;
  gameID!: string;
  gameOver = false;

  constructor(private route:ActivatedRoute, private firestore: Firestore,public dialog: MatDialog) { 
      
  }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      this.gameID = params['id'];
      this.getData(this.gameID);
    });
  }

  getData(gameID:any) {
  let gamesCollection = collection(this.firestore, 'games');
  let gameDocRef = doc(gamesCollection, gameID);
    docData(gameDocRef).subscribe((game: any) => {
      console.log('Game update:', game);
      this.game.currentPlayer = game.currentPlayer;
      this.game.players = game.players;
      this.game.playedCard = game.playedCard;
      this.game.stack = game.stack;
      this.game.pickCardAnimation = game.pickCardAnimation;
      this.game.currentCard = game.currentCard;
      this.game.player_images = game.player_images;
    });
  }


  takeCard() {
    if (this.game.stack.length == 0) {
      this.gameOver = true;
    } else if (!this.game.pickCardAnimation) {
    this.game.currentCard = this.game.stack.pop()!;
    this.game.pickCardAnimation = true;
    this.game.currentPlayer++;
    this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
    this.saveGame();
      
    setTimeout(() => {
      this.game.playedCard.push(this.game.currentCard);
      this.game.pickCardAnimation = false;
      this.saveGame();
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
        this.game.player_images.push("man-user-icon.png");
        this.saveGame();
      }
    });
  }

  saveGame() { 
    let gamesCollection = collection(this.firestore, 'games');
    let gameDocRef = doc(gamesCollection, this.gameID); 
    updateDoc(gameDocRef, {
      currentPlayer: this.game.currentPlayer,
      players: this.game.players,
      playedCard: this.game.playedCard,
      stack: this.game.stack,
      currentCard: this.game.currentCard,
      pickCardAnimation: this.game.pickCardAnimation,
      player_images: this.game.player_images,
    }).then(() => {
    }).catch((error) => {
      console.error("Error updating document: ", error);
    });
  }

  editPlayer(playerId: number) {
    console.log(playerId);

    const dialogRef = this.dialog.open(EditPlayerComponent);
    dialogRef.afterClosed().subscribe((change: string) => {
      console.log('Received change:', change);
          if (change) {
          if (change == 'DELETE') {
            this.game.player_images.splice(playerId, 1);
            this.game.players.splice(playerId, 1);
          } else {
          this.game.player_images[playerId] = change;
          }
          this.saveGame();
        }  
    });
  }
}

