import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Friends } from 'src/data/friends';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  translate: number = 0
  friendsActive = Friends
  
  constructor() { }

  ngOnInit(): void {
    
  }

  dragRight() {
    if(this.translate <= -20) {
      this.translate += 160
    }
  }

  dragLeft() {
    if(this.translate >= -200) {
      this.translate -= 160
    }
  }

  slider() {
    return `translateX(${this.translate}px)`
  }

}
