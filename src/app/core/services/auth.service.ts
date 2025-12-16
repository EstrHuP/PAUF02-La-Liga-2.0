import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiURL = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) {}

  login(userName: String, password: String): Observable<any> {
    return this.http.post(this.apiURL, { userName, password });
  }
}
