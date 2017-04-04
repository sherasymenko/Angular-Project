import {Component, OnInit} from '@angular/core';
import {AuthService} from  './auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import { FormGroup } from '@angular/forms';


@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
   styles:[`
         em {
      font-size: medium;
      float: right;
      color: #E05C65;
      padding-left: 10px;
    }
`]
})
export class LoginComponent implements OnInit {
  moduleId: number ;
  constructor(private authService: AuthService, private _router: Router, private _activatedRoute: ActivatedRoute){

  }
  ngOnInit() {
    this._activatedRoute
      .params
      .subscribe(params => {
        this.moduleId = params['moduleId'];
      });
  }
  login(formValues){
   this.authService.loginUser(formValues.userName, formValues.password);
   if (this.moduleId == 2){
     if (this.authService.isAuthenticated()){
       this._router.navigate(['/personsAdmin']);
     }
   }else{
     this._router.navigate(['/persons']);
   }
  }

  cancel(){
    this._router.navigate(['/persons']);
  }
}
