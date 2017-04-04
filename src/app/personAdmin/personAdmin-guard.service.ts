import {CanActivate, ActivatedRouteSnapshot, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import { AuthService } from '../user/auth.service';

@Injectable()
export class PersonAdminGuard implements CanActivate{

  constructor(private _router: Router, private _authService: AuthService){}

  canActivate(route: ActivatedRouteSnapshot): boolean{
    if(!this._authService.isAuthenticated()){
      alert('Brak dostępu');
      this._router.navigate(['/login', 2]);
      return false;
    }

    return true;
  }

}
