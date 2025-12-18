import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PartidoService {
  private apiURL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  createPartido(partido: any): Observable<any> {
    return this.http.post(`${this.apiURL}/partidos`, partido);
  }
}
