import {Component, EventEmitter, Output} from '@angular/core';
import {User} from "../user.model";
import {UserService} from "../../shared/user.service";


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  @Output() users = new EventEmitter<User>();
  name:string= "name";
  occupation:string= "occupation";
  email:string="email";
  bio:string="bio"

  constructor(private userService : UserService) {
  }
  onSubmit(){
    const newUser = new User();
    newUser.name = this.name;
    newUser.occupation = this.occupation;
    newUser.email = this.email;
    newUser.bio = this.bio;
    this.userService.addUser(newUser);
  }
}
