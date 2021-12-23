import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFollowing } from '../interfaces/IFollowing';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private http: HttpClient) { }

  following(user: string) : Observable<IFollowing> {
    return this.http.get<IFollowing>(`https://api.github.com/users/${user}/following`)
  }

  followers(user: string) : Observable<IFollowing> {
    return this.http.get<IFollowing>(`https://api.github.com/users/${user}/followers`)
  }
}
