import {Component, Input} from '@angular/core';
import {User} from "../user.model";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  @Input() userSubmit: User | undefined;
  constructor() {
  }
  ngOnInit(){

  }
}
