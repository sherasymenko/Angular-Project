import { Component } from  '@angular/core';
import {AuthService} from '../user/auth.service';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'navigate-bar',
  templateUrl: 'navigate-bar.component.html'
})
export class NavigateBarComponent {
  constructor(private authService: AuthService, private _router: Router){}

  logOut(){
    this.authService.logOutUser();
    this._router.navigate(['/persons']);
  }
}
