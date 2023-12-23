import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {User} from "../user-list/user.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _users: User[] = [
    {
      id: 1,
      name: "John Doe",
      occupation: "Software Developer",
      email: "john.doe@example.com",
      bio: "Passionate about coding and building innovative solutions.",
    },
    {
      id: 2,
      name: "Jane Smith",
      occupation: "Graphic Designer",
      email: "jane.smith@example.com",
      bio: "Creative mind with a flair for visual aesthetics.",
    },
    {
      id: 3,
      name: "Bob Johnson",
      occupation: "Data Scientist",
      email: "bob.johnson@example.com",
      bio: "Analyzing data to derive meaningful insights.",
    },
    {
      id: 4,
      name: "Alice Williams",
      occupation: "Marketing Specialist",
      email: "alice.williams@example.com",
      bio: "Crafting compelling narratives for effective marketing.",
    },
    {
      id: 5,
      name: "Charlie Brown",
      occupation: "Product Manager",
      email: "charlie.brown@example.com",
      bio: "Driving product development and strategy.",
    },
    {
      id: 6,
      name: "Eva Martinez",
      occupation: "UX/UI Designer",
      email: "eva.martinez@example.com",
      bio: "Creating delightful user experiences through design.",
    },
    {
      id: 7,
      name: "David Clark",
      occupation: "Financial Analyst",
      email: "david.clark@example.com",
      bio: "Analyzing financial data for informed decision-making.",
    },
    {
      id: 8,
      name: "Grace Taylor",
      occupation: "HR Manager",
      email: "grace.taylor@example.com",
      bio: "Fostering a positive work environment and talent acquisition.",
    },
    {
      id: 9,
      name: "Samuel White",
      occupation: "Network Engineer",
      email: "samuel.white@example.com",
      bio: "Building and maintaining robust network infrastructure.",
    },
    {
      id: 10,
      name: "Olivia Adams",
      occupation: "Content Writer",
      email: "olivia.adams@example.com",
      bio: "Crafting engaging and informative written content.",
    },
  ];
  private selectedUser: BehaviorSubject<User | undefined> = new BehaviorSubject<User | undefined>(undefined);

  constructor(private router:Router) { }

  get users(): Observable<User[]> {
    return of(this._users);
  }

  addUser(user: User): Observable<string> {
    this._users.push(user)
    console.log('tesyt');
    this.router.navigate(['home']);
    return of('user add');
  }
  updateUser(user: User): Observable<string>{
    const index = this._users.findIndex(u => u.id === user.id); // Assuming each user has a unique identifier like 'id'

    if (index !== -1) {
      this._users[index] = user;
      this.router.navigate(['home']);
      return of('user modified');
    } else {
      return of('user not found');
    }
  }
  selectUser(id:number){
    const users = this.users
    const user = this._users.find(u => u.id === id); // Assuming each user has a unique identifier like 'id'

    if (id !== -1) {
      this.selectedUser.next(user);
    }
  }
  getSelectedUser(): Observable<User | undefined> {
    return this.selectedUser.asObservable();
  }
}
