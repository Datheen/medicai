import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() title: string = '';
  @Input() value: string = '';
  @Input() icon: string = '';
  @Input() color: string = 'blue';
  @Input() percentage?: number;
}
