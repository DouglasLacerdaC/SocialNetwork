import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IRepo } from '../interfaces/IRepo';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor(private http: HttpClient) { }

  repository(user: string): Observable<IRepo[]> {
    return this.http.get<IRepo[]>(`https://api.github.com/users/${user}/repos`);
  }

}
