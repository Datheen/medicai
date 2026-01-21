import { Component, inject } from '@angular/core';
import { SearchService } from '../../services/search';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  private searchService = inject(SearchService);

  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchService.updateSearchTerm(input.value);
  }
}
