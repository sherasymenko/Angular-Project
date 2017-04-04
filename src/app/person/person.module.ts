import { NgModule } from '@angular/core';
import { PersonService } from '../shared/person.service';
import { PersonListComponent } from './person-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([{path: 'persons', component: PersonListComponent}]) ],
  declarations: [PersonListComponent],
  providers: []
})
export class PersonModule {}
