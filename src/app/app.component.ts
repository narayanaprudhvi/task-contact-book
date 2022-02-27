import { Component } from '@angular/core';
import { Observer } from 'rxjs';
import { User } from './user.model';
// import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // /users: Observable<User[]>;

  title = 'task-contact-book';
  title1='SPAARKS ASSIGNMENT';
  myDate:number=Date.now();

  constructor(){}
  

  onUserAdd(){
    let userName: string = "xyz";
    let mobileNumber: string ="494949";
    // let id = uuid.v4();

    // let user: User = new User(id, userName,mobileNumber);

    // this.userService.addUser(user);
  }

  
 
}
