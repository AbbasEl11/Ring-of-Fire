import { Component } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Game } from '../../models/game';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {
  game: any;

  constructor(private firestore: Firestore ,private router: Router) {
    
  }

  newGame() {
    let game = new Game();
    let gamesCollection = collection(this.firestore, 'games');
    addDoc(gamesCollection, game.toJson())
      .then((gameInfo: any) => {
        console.log(gameInfo.id);

        this.router.navigateByUrl('/game/'+gameInfo.id);
      });
  }    

}
