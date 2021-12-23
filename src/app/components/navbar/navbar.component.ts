import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/IUser';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user !: IUser 

  constructor(private router: Router,
              private spinner: NgxSpinnerService,
              private requestUser: LoginService) { }

  ngOnInit(): void {
    this.requestUser.validation(JSON.parse(localStorage.getItem('user')!)).subscribe(
      response => {
        this.user = response
      }
    )
  }

  profile(user: string) {
    this.router.navigate(['user'], { queryParams: { profileName: user, private: 'notprivate' } })
  }

  logout() {

    this.spinner.show()

    setTimeout(() => {
      localStorage.removeItem('user')
      this.router.navigate(['login'])
    }, 500)
    
    setTimeout(() => {
      this.spinner.hide()
    }, 1000)


  }

}
