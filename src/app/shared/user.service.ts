import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {User} from "../user-list/user.model";

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

  constructor() { }

  get users(): Observable<User[]> {
    return of(this._users);
  }
}
