import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFollowing } from 'src/app/interfaces/IFollowing';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  @Input() follow: any

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  profile(user: string) {
    this.router.navigate(['user'], { queryParams: { profileName: user, private: 'private' } })
    this.router.routeReuseStrategy.shouldReuseRoute = () => { return false }
  }

}
