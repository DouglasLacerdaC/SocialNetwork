import { Component, OnInit, ViewChild } from '@angular/core';

import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute } from '@angular/router';
import { IFollowing } from 'src/app/interfaces/IFollowing';
import { IUser } from 'src/app/interfaces/IUser';
import { FollowService } from 'src/app/service/follow.service';
import { LoginService } from 'src/app/service/login.service';
import { NgxSpinnerService } from "ngx-spinner";
import { IPost } from 'src/app/interfaces/IPost';
import { FormControl, FormGroup } from '@angular/forms';
import { Posts } from 'src/data/posts';
import * as moment from 'moment';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  
  @ViewChild('staticAlert', { static: false })
  staticAlert!: NgbAlert
  @ViewChild('selfClosingAlert', { static: false })
  selfClosingAlert!: NgbAlert

  private _success = new Subject<string>();
  
  nameUser: string = '' 
  dataUser !: IUser
  following !: any
  follower !: any
  postsInfinite: number = 3
  posts: IPost[] = Posts.slice(0, 3)
  valueProgress: number = 20 

  staticAlertClosed = false;
  successMessage = '' /* variables alert bootstrap */

  opacitySpinner: boolean = true

  postForm = new FormGroup({
    comment: new FormControl
  })

  constructor(private activedRouter: ActivatedRoute,
              private requestUser: LoginService,
              private requestFollow: FollowService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.activedRouter.queryParams.subscribe(
      response => {
        this.nameUser = response.user
      },
      error => {
        this.spinner.hide()
      }
    )

    this.requestUser.validation(this.nameUser).subscribe(
      data => {
        this.dataUser = data
      },
      error => {
        this.spinner.hide()
      }
    )

    this.requestFollow.following(this.nameUser).subscribe(
      data=> {
        this.following = data
      },
      error => {
        this.spinner.hide()
      }
    )

    this.requestFollow.followers(this.nameUser).subscribe(
      data=> {
        this.follower = data
      },
      error => {
        this.spinner.hide()
      }
    ) /* finish requests */
    

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
    
    this._success.subscribe(message => this.successMessage = message);
    this._success.pipe(debounceTime(3000)).subscribe(() => {
      if (this.selfClosingAlert) {
        this.selfClosingAlert.close()
      }
    })
    
  }
  
  onScroll() {

    if(this.posts.length < Posts.length ) {

      this.postsInfinite += 2

      setTimeout(() => {
        for(let indexPost = this.posts.length; indexPost <= this.postsInfinite; indexPost++) {
          if(this.posts.length >= Posts.length) {
            this.opacitySpinner = false
            break
          }
          this.posts.push(Posts[indexPost])
        }
      }, 1500)
      
      
    }
  }

  onSubmit() {

    moment.locale('pt-br');
    
    let post: IPost = {
      profile: {
        name: this.nameUser,
        image: this.dataUser.avatar_url
      },
      comment: this.postForm.value.comment,
      created_at: moment().calendar(),
      images: {
        image_one: '',
        image_two: '',
        image_three: ''
      }
    }
    
    this.changeSuccessMessage()

    setInterval(() => {
      this.valueProgress += 5
    }, 100)

    this.valueProgress = 0

    setTimeout(() => {
      this.posts.unshift(post)
      this.save()
    }, 3000)

  }

  changeSuccessMessage() { this._success.next(`.`) }

  save() {
    const storage = JSON.stringify(this.posts)
    localStorage.setItem('posts', storage)
  }

}
