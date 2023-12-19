import {ChangeDetectorRef, Component} from '@angular/core';
import {User} from "./user.model";
import {MatTableDataSource} from "@angular/material/table";
import {UserService} from "../shared/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  userSelectionne!:User;
  formVisible = false;
  users : User[] = [];
  displayedColumns = ['id', 'name', 'occupation', 'email', 'bio'];

  dataSource:MatTableDataSource<User>;
  constructor(private cdr: ChangeDetectorRef, private userService:UserService) {
    this.dataSource = new MatTableDataSource<User>(this.users);
  }
  ngOnInit(){
    this.userService.users.subscribe(users => {
        this.users = users;
        this.dataSource.data = [...this.users];
    });
  }
  detailsClick(user:User) {
    this.userSelectionne = user;
  }
  deleteClick(user:User) {
    let index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
      this.dataSource.data = this.users; // Mettre à jour la référence pour déclencher le rafraîchissement de la vue
      this.cdr.detectChanges();
      console.log("ok");
    }
  }
  onAddUserBtnClick() {this.formVisible = true;}
  onNewUser(event:User){
    //this.ELEMENT_DATA.push(event);
      this.userService.addUser(event).subscribe(message => {
          console.log(message);
          this.dataSource.data = this.users; // Mettez à jour la source de données pour le tableau Material
      });
      this.formVisible = false;
  }

  updateUser(user:User){
      this.userService.updateUser(user).subscribe(message => {
          console.log(message);
          this.dataSource.data = this.users; // Mettez à jour la source de données pour le tableau Material
      });
  }
}