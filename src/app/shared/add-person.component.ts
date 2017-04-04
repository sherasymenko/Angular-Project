import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPerson } from './person';
import { PersonService } from './person.service';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'add-person',
  templateUrl: 'add-person.component.html',
  styles: [`
    em {
      font-size: medium;
      float: right;
      color: #E05C65;
      padding-left: 10px;
    }
  `]
})
export class AddPersonnComponent implements OnInit {
  @Output() saveNewPerson = new EventEmitter();
  @Output() cancelNewPerson = new EventEmitter();
  form: FormGroup;

  persons: IPerson[] = [];

  constructor(private _personService: PersonService) {
  }

  profileForm: FormGroup;

  ngOnInit(): void {

    let personNo = new FormControl('', Validators.required);
    this.profileForm = new FormGroup({
      fName: new FormControl('', Validators.required),
      lName: new FormControl('', Validators.required),
      age: new FormControl('', Validators.pattern('^(0|[1-9][0-9]*)$')),
      jobTitle: new FormControl(),
      gender: new FormControl(),
      startDate: new FormControl(),
      email: new FormControl(),
      personNo: new FormControl('', Validators.required),
      imageUrl: new FormControl(),
    });
  }

  cancel(){
    this.cancelNewPerson.emit();
  }

  savePerson(formValues) {
    if (this.profileForm.valid) {
      let person: IPerson = {
        personId: undefined,
        fName: formValues.fName,
        lName: formValues.lName,
        age: formValues.age,
        jobTitle: formValues.jobTitle,
        gender: formValues.gender,
        startDate: formValues.startDate,
        email: formValues.email,
        personNo: formValues.personNo,
        imageUrl: formValues.imageUrl
      }
      console.log(person);
      this.saveNewPerson.emit(person);
    }
  }
}
