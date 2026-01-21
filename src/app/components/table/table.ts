import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.html',
  styleUrl: './table.css',
})
export class Table {
  // 👇 isso é o "props" do React
  @Input() data: any[] = [];

  getBadgeClass(quantidade: string): string {
    const [atual, total] = quantidade.split('/').map(Number);
    const percentual = (atual / total) * 100;

    if (percentual >= 70) {
      return 'badge-green';
    } else if (percentual >= 30) {
      return 'badge-yellow';
    } else {
      return 'badge-red';
    }
  }
}
