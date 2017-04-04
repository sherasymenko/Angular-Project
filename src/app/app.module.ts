import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavigateBarComponent } from './navigatebar/navigate-bar.component'
import { RouterModule } from '@angular/router';
import { PersonModule } from './person/person.module';
import { UserModule } from './user/user.module';
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    PersonModule,
    UserModule,
    RouterModule.forRoot([
      {path: 'personsAdmin', loadChildren: './personAdmin/personAdmin.module#PersonAdminModule'},
      {path: '', redirectTo: 'persons', pathMatch: 'full'},
      {path: '**', redirectTo: 'persons', pathMatch: 'full'}
    ]),
  ],
  declarations: [
    AppComponent,
    NavigateBarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
