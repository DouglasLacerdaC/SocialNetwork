import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  validation(user: string): Observable<IUser> {
    return this.http.get<IUser>(`http://api.github.com/users/${user}`)
  }
  
}
