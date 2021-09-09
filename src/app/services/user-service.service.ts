import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable , of } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  users: User[] = [
    {
      id: 1,
      name: 'Amir',
      favourites: []
    },
    {
      id: 2,
      name: 'Kargen'
    },
    {
      id: 3,
      name: 'Chyld'
    },
  ]
  private activeUser: User = this.users[0]

  constructor() { }

  getActiveUser(): Observable<User>{
    return of(this.activeUser);
  }

  setActiveUser(name: string): void{
    this.users.map((user)=>{
      if(user.name === name){
        this.activeUser = user
      }
    })
  }

  createUser(user: User){
    this.users.push(user)
  }

  login(name: string){
    for(const i of this.users){
      if(i.name === name){
        this.setActiveUser(name)
      }
    }
    return 'User not found!'
  }

  getAllUsers(): Observable<User[]>{
    return of(this.users)
  }



}
