import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/login/login.component';
import { FeedComponent } from './views/feed/feed.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BoxComponent } from './components/box/box.component';
import { SliderComponent } from './components/slider/slider.component';
import { FormsModule } from '@angular/forms';
import  { NgxSpinnerModule  }  from  "ngx-spinner" ;
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './views/user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ChatComponent } from './views/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeedComponent,
    NavbarComponent,
    BoxComponent,
    SliderComponent,
    UserComponent,
    ChatComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgbModule,
    InfiniteScrollModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
