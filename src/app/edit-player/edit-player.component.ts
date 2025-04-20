import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-player',
  standalone: true,
  imports: [CommonModule, MatDialogModule,MatIconModule,MatButtonModule],
  templateUrl: './edit-player.component.html',
  styleUrl: './edit-player.component.scss'
})
export class EditPlayerComponent {
  allProfilePictures = ["man-user-icon.png", "woman-user-icon.png","monkey.png","pinguin.svg","serious-woman.svg","winkboy.svg"]
  
  constructor(public dialog: MatDialogRef<DialogAddPlayerComponent>) {
    
  }
}
