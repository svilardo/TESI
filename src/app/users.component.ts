import { Component,OnInit} from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'my-users',
  templateUrl: './app.component.html',
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .users {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .users li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .users li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .users li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .users .text {
      position: relative;
      top: -3px;
    }
    .users .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
  providers: [UserService]
})


export class UsersComponent implements OnInit{	
  
	title = 'List of User';

	constructor(private userService: UserService) {}
	users: User[];
	selectedUser: User;

  	getUsers():void {
  		this.userService.getUsers().then(users => this.users = users);
	  }

	ngOnInit(): void {
    	this.getUsers();
    }

	onSelect(user: User): void {
		this.selectedUser = user;
	}

  
}