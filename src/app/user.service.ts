import { Injectable } from '@angular/core';
import { User } from './user';
import { USERS } from './mock-users';

@Injectable()
export class UserService {

	getUsers(): Promise<User[]> {
    	return Promise.resolve(USERS);
    } 

    /*simula ritardo del server*/
    getUsersSlowly(): Promise<User[]> {
		return new Promise(resolve => {
    	// Simulate server latency with 2 second delay
    	setTimeout(() => resolve(this.getUsers()), 2000);
  	});
}

}