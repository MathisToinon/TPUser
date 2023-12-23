import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { Subscription } from 'rxjs';
import { UserService } from '../../shared/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  selectedUser: User = new User(); // Initialisation avec une instance de User par défaut
  private subscription: Subscription;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) {
    this.subscription = new Subscription();
  }

  ngOnInit() {
    const id = parseInt(this.activatedRoute.snapshot.params['id']);
    this.userService.selectUser(id);

    this.subscription.add(
        this.userService.getSelectedUser().subscribe(
            (user: User | undefined) => {
              this.selectedUser = user || new User();
            }
        )
    );
  }

  onSubmit() {
    this.userService.updateUser(this.selectedUser);
  }
}
