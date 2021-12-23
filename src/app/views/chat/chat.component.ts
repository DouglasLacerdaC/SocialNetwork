import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FollowService } from 'src/app/service/follow.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  nameUser: string = ''
  friendsChat: any = []

  constructor(private requestFollow: FollowService,
              private activedRouter: ActivatedRoute,
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

    this.requestFollow.following(this.nameUser).subscribe(
      response => {
        this.friendsChat = response
        console.log(response)
      }
    )
  
  }

}
