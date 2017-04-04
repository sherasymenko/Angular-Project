import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'login', component: LoginComponent},
      {path: 'login/:moduleId', component: LoginComponent},])],
  declarations: [LoginComponent],
  providers: [AuthService]
})
export class UserModule {
}
