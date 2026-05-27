import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() senderName: string = '';
  @Input() senderEmail: string = '';
  @Input() subject: string = '';
  @Input() preview: string = '';
  @Input() timestamp: string = '';
  @Input() isRead: boolean = true;
  @Input() labels: string[] = [];

  @Output() cardClick = new EventEmitter<void>();

  constructor() {}

  get formattedDate(): string {
    return new Date(this.timestamp).toLocaleDateString();
  }

  onClick(): void {
    this.cardClick.emit();
  }
}
