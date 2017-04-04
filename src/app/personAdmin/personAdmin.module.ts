import { NgModule } from '@angular/core';
import { PersonService } from '../shared/person.service';
import { PersonAdminListComponent } from './person-adminList.component';
import { PersonAdminGuard } from  './personAdmin-guard.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { EditPersonnComponent } from './edit-person.component';
import { PersonFilterPipe } from './person-filter.pipe';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: '', canActivate: [PersonAdminGuard], component: PersonAdminListComponent},
      {path: 'person/:id', component: EditPersonnComponent}
    ])],
  declarations: [
    PersonAdminListComponent,
    EditPersonnComponent,
    PersonFilterPipe
  ],
  providers: [PersonService, PersonAdminGuard]
})
export class PersonAdminModule {
}
