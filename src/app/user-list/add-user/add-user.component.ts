import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../user.model";


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  @Output() users = new EventEmitter<User>();

  id:number= 0;
  name:string= "prenom";
  occupation:string= "travail";
  email:string="email";

  constructor() {
  }
  onSubmit(){
    const newUser = new User();
    newUser.id = this.id;
    newUser.name = this.name;
    newUser.occupation = this.occupation;
    newUser.email = this.email;
    this.users.emit(newUser);
  }
}
