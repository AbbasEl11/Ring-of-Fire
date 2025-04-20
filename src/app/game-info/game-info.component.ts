import { Component, Input, OnInit, OnChanges } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrl: './game-info.component.scss'
})
export class GameInfoComponent implements OnInit , OnChanges {
  cardAction = [
    { "title": "Waterfall", "description": "Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking." },
    { "title": "You", "description": "You decide who drinks." },
    { "title": "Me", "description": "Congrats! Drink a shot!" },
    { "title": "Category", "description": "Come up with a category (e.g. Animals). Each player must enumerate one item from the category." },
    { "title": "Dance Move", "description": "Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one." },
    { "title": "Girls", "description": "All girls drink." },
    { "title": "Heaven", "description": "Hands up! The last player drinks!" },
    { "title": "Mate", "description": "Pick a mate. Your mate must always drink when you drink and vice versa." },
    { "title": "Thumbmaster", "description": "Secretly place your thumb on the table. The last player to notice drinks." },
    { "title": "Boys", "description": "All boys drink." },
    { "title": "Quizmaster", "description": "You are the quizmaster. Ask a question. Anyone who answers incorrectly drinks." },
    { "title": "Never Have I Ever...", "description": "Say something you have never done. Everyone who has done it must drink." },
    { "title": "Rule", "description": "Make a rule. Everyone must drink if they break the rule." },
    { "title": "Word Game", "description": "Choose a word. Each time someone says it, they must drink." },
    { "title": "Whisper", "description": "Whisper a sentence to one player. If it’s wrong by the last player, they drink." },
    { "title": "Numbers", "description": "Count clockwise. Anyone who says '3', '6', or '9' drinks." },
    { "title": "Chair Circle", "description": "Everyone sits in a circle. The last player to sit drinks." },
    { "title": "Opposite", "description": "Say a word, and each player must say the opposite. Anyone who can't drinks." },
    { "title": "Quick Drink", "description": "Everyone must drink within a set time. The first to stop drinks." },
    { "title": "Lie", "description": "Tell a lie about yourself. Anyone who believes it drinks." },
    { "title": "Rhyme", "description": "Say a word, and the next player must find a rhyme. Anyone who can't drinks." },
    { "title": "Emoji", "description": "Make an emoji face. The next player must mimic it. Anyone who can't drinks." },
    { "title": "Job", "description": "Name a job. Each player must take turns naming a new job. Anyone who can't drinks." },
    { "title": "Colors", "description": "Name a color, and each player must name something of that color. Anyone who can't drinks." },
    { "title": "Mother-in-Law", "description": "Each player names a word starting with 'Mother-in-Law'. Anyone who can't drinks." },
    { "title": "Animal Sound", "description": "Make an animal sound. The next player must repeat it and add a new one. Anyone who can't drinks." },
    { "title": "Mouth Movement", "description": "Make a sound without speaking. If the next player can't guess, they drink." },
    { "title": "Movie Title", "description": "Name a movie title. Each player must name another title starting with the last letter. Anyone who can't drinks." },
    { "title": "Random Generator", "description": "Everyone counts to three. If anyone says the same number, they drink!" },
    { "title": "Contradictions", "description": "Choose a player and give each other a word. The other must say the opposite. Anyone who can't drinks." },
    { "title": "Icebreaker", "description": "Share an interesting fact about yourself. Anyone who finds it boring drinks." },
    { "title": "Compliment", "description": "Give a compliment to the player on your left. If you can't, you drink." },
    { "title": "Finish the Lyric", "description": "Start singing a song. The next player must finish the lyric. Anyone who can't drinks." },
    { "title": "Guess the Animal", "description": "Mimic an animal without speaking. The others must guess it. Anyone who can't guess drinks." },
    { "title": "Story Time", "description": "Start a story with one sentence. Each player adds a sentence. Anyone who hesitates drinks." },
    { "title": "Accents", "description": "Speak in an accent. If anyone laughs, they drink." },
    { "title": "Alphabet Game", "description": "Pick a topic and go through the alphabet. Anyone who can't think of a word drinks." },
    { "title": "True or False", "description": "State a fact about yourself. The others must guess if it's true or false. Anyone who guesses wrong drinks." },
    { "title": "Sing a Song", "description": "Sing a line from a song. If someone knows the song and sings along, you drink." },
    { "title": "Mimic a Celebrity", "description": "Mimic a celebrity. If no one guesses, you drink." },
    { "title": "Pictionary", "description": "Draw something on your palm. The next player must guess what it is. Anyone who can't guess drinks." },
    { "title": "Two Truths and a Lie", "description": "Say two truths and one lie. The others must guess the lie. Anyone who guesses wrong drinks." },
    { "title": "Catchphrase", "description": "Say a catchphrase from a movie or show. If someone knows it, they drink." },
    { "title": "Dance Battle", "description": "Challenge the player to a dance-off. The loser drinks." },
    { "title": "Riddle Me This", "description": "Ask a riddle. Anyone who can't answer drinks." },
    { "title": "Silly Questions", "description": "Ask a silly question. Anyone who doesn’t answer must drink." },
    { "title": "Silly Faces", "description": "Make a silly face. The next player must copy it. Anyone who can't drinks." },
    { "title": "Last Letter", "description": "Say a word. The next player must say a word starting with the last letter. Anyone who can't drinks." },
    { "title": "Mood Ring", "description": "Act out an emotion. The next player must guess it. Anyone who can't guess drinks." },
    { "title": "Secret Handshake", "description": "Create a secret handshake. Anyone who forgets it drinks." },
    { "title": "Challenger", "description": "Challenge another player to do something silly. If they refuse, they drink." }
  ];

  title: string = '';
  description: string = '';
  @Input() card: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.card) {
    console.log("current Card is: ", this.card);
    let cardNumber = +this.card.split('_')[1];
    this.title = this.cardAction[cardNumber - 1].title;
    this.description = this.cardAction[cardNumber - 1].description;
    }
  }
}