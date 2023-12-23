import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user.model";
import {UserService} from "../../shared/user.service";
import {ActivatedRoute} from "@angular/router";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  selectedUser: User | undefined;
  private subscription: Subscription;
  constructor(private userService: UserService,
              private activatedRoute:ActivatedRoute) {
    this.subscription = new Subscription();
  }

  ngOnInit(){
    const id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.userService.selectUser(id);

    this.subscription.add(
        this.userService.getSelectedUser().subscribe(
            (user: User | undefined) => {
              this.selectedUser = user;
            }
        )
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
