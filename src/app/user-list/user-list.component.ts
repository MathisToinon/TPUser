import {ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {User} from "./user.model";
import {MatTableDataSource} from "@angular/material/table";
import {UserService} from "../shared/user.service";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent{
  users : User[] = [];
  displayedColumns = ['id', 'name', 'occupation', 'email', 'bio'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

  dataSource:MatTableDataSource<User>;
  constructor(private cdr: ChangeDetectorRef, private userService:UserService) {
    this.dataSource = new MatTableDataSource<User>(this.users);
  }
  ngOnInit() {
    this.userService.users.subscribe(users => {
      this.users = users;
      this.dataSource.data = this.users;
      this.cdr.detectChanges();
    });
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
}
