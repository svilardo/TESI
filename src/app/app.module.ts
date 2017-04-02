import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserDetailComponent } from './user-detail.component';
import { UsersComponent } from './users.component';
import { UserService } from './user.service';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersComponent,
    DashboardComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,    
    RouterModule.forRoot([
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]),
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

