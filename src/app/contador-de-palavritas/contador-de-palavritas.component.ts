import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contador-de-palavritas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contador-de-palavritas.component.html',
  styleUrl: './contador-de-palavritas.component.scss'
})

export class ContadorDePalavritasComponent {
  text: string = '';
  wordCount: number = 0;

  countWords() {
    if (this.text.trim() === '') {
      this.wordCount = 0;
    } else {
      this.wordCount = this.text.trim().split(/\s+/).length;
    }
  }
}

