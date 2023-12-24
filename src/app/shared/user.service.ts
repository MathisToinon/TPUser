import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../user-list/user.model';
import { Router } from '@angular/router';
import { HttpService } from './http-service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([]);
  private selectedUser: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);

  constructor(private router: Router, private http: HttpService) {
    this.getUsers(); // Appel initial pour récupérer les utilisateurs
    this.router.navigate(['/home']);
  }

  getUsers() {
    this.http.getUsers().subscribe(
        (data: User[]) => {
          console.log(data);
          this._users.next(data); // Mettez à jour le BehaviorSubject avec les nouvelles données
        },
        (error) => {
          console.error('Error fetching users', error);
        }
    );
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  addUser(user: User): Observable<string> {
    const lastUserId = this._users.value.length > 0 ? this._users.value[this._users.value.length - 1].id : 0;
    // @ts-ignore
    user.id = lastUserId + 1; // Nouvel id pour le nouvel utilisateur
    const updatedUsers = [...this._users.value, user];
    this._users.next(updatedUsers);
    this.router.navigate(['home']);
    return of('user add');
  }


  updateUser(user: User): Observable<string>{
    const updatedUsers = this._users.value.map(u => (u.id === user.id ? user : u));
    this._users.next(updatedUsers);
    this.router.navigate(['home']);
    this.http.updateUser(user);
    console.log("ok");
    return of('user modified');
  }

  selectUser(id:number){
    const user = this._users.value.find(u => u.id === id);
    if (user) {
      this.selectedUser.next(user);
    }
  }

  getSelectedUser(): Observable<User | undefined> {
    return this.selectedUser.asObservable();
  }
}
