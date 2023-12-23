import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../user.model";
import {UserService} from "../../shared/user.service";


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  @Output() users = new EventEmitter<User>();

  id:number= 0;
  name:string= "name";
  occupation:string= "occupation";
  email:string="email";

  constructor(private userService : UserService) {
  }
  onSubmit(){
    const newUser = new User();
    newUser.id = this.id;
    newUser.name = this.name;
    newUser.occupation = this.occupation;
    newUser.email = this.email;
    this.userService.addUser(newUser);
  }
}
