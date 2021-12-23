import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FollowService } from 'src/app/service/follow.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { RepositoryService } from 'src/app/service/repository.service';
import { IRepo } from 'src/app/interfaces/IRepo';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  dataFollowingProfile: any
  dataUser: any
  repoUser: IRepo[] = []
  profileName: string = ''
  private: string = ''
  closeResult = '';
  praiceChecked: boolean = false

  myBio = JSON.parse(localStorage.getItem('myBio')!)

  alterBio = new FormGroup({
    bio: new FormControl
  })

  constructor(private followService: FollowService,
              private userService: LoginService,
              private repoService: RepositoryService,
              private spinner: NgxSpinnerService,
              private modalService: NgbModal,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.spinner.show()

    this.activatedRoute.queryParams.subscribe(
      response => {
        this.profileName = response.profileName
        this.private = response.private
      }
    )

    this.userService.validation(this.profileName).subscribe(
      data=> {
        this.dataUser = data
      }
    )

    this.followService.following(this.profileName).subscribe(
      data => {
        this.dataFollowingProfile = data
      },
      error => this.spinner.hide()
    )

    this.repoService.repository(this.profileName).subscribe(
      data => {
        this.repoUser = data
        console.log(this.repoUser[1].forks_count)
      }
    )

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    
  }

  open(content: any) {
    const modalRef = this.modalService.open(content, { centered: true });
  }

  onSubmit() {
    const bio = JSON.stringify(this.alterBio.value.bio)
    localStorage.removeItem('myBio')
    localStorage.setItem('myBio', bio)
    this.myBio = JSON.parse(localStorage.getItem('myBio')!)
  }

}
