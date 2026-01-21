import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MedicamentosService {
  constructor(private http: HttpClient) {}

  listar(): Observable<any[]> {
    const timestamp = new Date().getTime();
    console.log('Carregando dados do JSON...', timestamp);
    
    return this.http.get<any[]>(`/data/apioutput.json?v=${timestamp}`).pipe(
      tap(data => console.log('Dados carregados com sucesso:', data.length, 'itens')),
      retry(2),
      catchError(error => {
        console.error('Erro ao carregar medicamentos:', error);
        return of([]);
      })
    );
  }
}
