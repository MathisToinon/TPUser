import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../user.model";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  @Input() userSubmit: User | undefined;
  @Output() users = new EventEmitter<User>();
  id: number | undefined;
  name:string | undefined= "";
  occupation:string | undefined= "";
  email:string | undefined="";
  ngOnInit(){
    this.id = this.userSubmit?.id;
    this.name = this.userSubmit?.name;
    this.occupation = this.userSubmit?.occupation;
    this.email = this.userSubmit?.email;
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
