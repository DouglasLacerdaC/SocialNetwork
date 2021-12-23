import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string = ''
  verification: boolean = false

  constructor(private router: Router,
              private loginService: LoginService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')) {
      this.router.navigate(['feed'], { queryParams: { user: JSON.parse(localStorage.getItem('user')!) } })
    }

  }

  login() {
    this.loginService.validation(this.userName).subscribe(
      response => {
        this.spinner.show()
        this.saveUser()
        this.router.navigate(['feed'], { queryParams: { user: JSON.parse(localStorage.getItem('user')!) } })
      },
      error => {
        this.verification = true
        this.display()
        this.spinner.hide()
      }
    )
  }

  display() {
    if(this.verification == false) {
      return 'none'
    } else {
      return 'flex'
    }
  }

  saveUser() {
    localStorage.clear()
    const user = JSON.stringify(this.userName)
    localStorage.setItem('user', user)
  }

}