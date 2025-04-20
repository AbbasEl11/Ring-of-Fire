import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EditPlayerComponent } from '../edit-player/edit-player.component';

@Component({
  selector: 'app-dialog-add-player',
  standalone: true,
  imports: [MatDialogModule,MatFormFieldModule,
    FormsModule,MatInputModule,MatButtonModule],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
  name: string = '';
  
  constructor(private dialog: MatDialogRef<EditPlayerComponent> ) { }

  ngOnInit(): void {
  }
  
  onNoClick() {
    this.dialog.close();
  }
}
