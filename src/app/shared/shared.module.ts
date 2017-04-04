import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddPersonnComponent } from './add-person.component';
import { PersonService } from './person.service';

@NgModule({
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddPersonnComponent
    ],
  declarations: [AddPersonnComponent],
  providers: [PersonService]
})
export class SharedModule {
}
