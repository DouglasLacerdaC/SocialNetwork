import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './views/chat/chat.component';
import { FeedComponent } from './views/feed/feed.component';
import { LoginComponent } from './views/login/login.component';
import { UserComponent } from './views/user/user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'feed', component: FeedComponent },
  {path: 'user', component: UserComponent},
  {path: 'chat', component: ChatComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
