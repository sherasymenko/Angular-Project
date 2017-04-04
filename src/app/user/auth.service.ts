import {Injectable} from '@angular/core';
import {IUser} from './user.model';


@Injectable()
export class AuthService{

  currentUser: IUser;

  loginUser(userName: string, password: string){

    if(userName === 'darek' && password ==='welcome'){
      this.currentUser = {
        id:1,
        firstName: 'Darek',
        lastname: 'Pok',
        userName: 'Darek'
      }
    } else  if(userName === 'svieta' && password ==='welcome') {
      this.currentUser = {
        id: 1,
        firstName: 'Svieta',
        lastname: 'her',
        userName: 'Svieta'
      }
    }else {
        alert("Błedne dane logowania");
      }
  }
  logOutUser(){
    this.currentUser = null;
  }

  isAuthenticated(){
    return this.currentUser;
  }
}
