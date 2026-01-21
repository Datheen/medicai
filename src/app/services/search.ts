import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchTermSubject = new Subject<string>();
  searchTerm$ = this.searchTermSubject.asObservable();

  updateSearchTerm(term: string): void {
    this.searchTermSubject.next(term);
  }
}
