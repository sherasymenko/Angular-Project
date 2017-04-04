import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { IPerson } from '../shared/person';
import { PersonService } from '../shared/person.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  moduleId: module.id,
  selector: 'edit-person',
  templateUrl: 'edit-person.component.html',
  styles: [`
    em {
      font-size: medium;
      float: right;
      color: #E05C65;
      padding-left: 10px;
    }
  `]
})
export class EditPersonnComponent implements OnInit {
  @Output() updatePerson = new EventEmitter();
  private sub: Subscription;
  errorMessage: string;
  person: IPerson;
  profileForm: FormGroup;

  constructor(private _personService: PersonService, private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit(): void {
    this.sub = this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this.getPerson(id);
      });

  }

  getPerson(id: number) {
    this._personService.getPerson(id).subscribe(
      person => {
        this.person = person;
        this.profileForm = new FormGroup({
          fName: new FormControl(this.person ? this.person.fName : '', Validators.required),
          lName: new FormControl(this.person ? this.person.lName : '', Validators.required),
          age: new FormControl(this.person ? this.person.age : '', Validators.pattern('^(0|[1-9][0-9]*)$')),
          jobTitle: new FormControl(this.person ? this.person.jobTitle : ''),
          gender: new FormControl(this.person ? this.person.gender : ''),
          startDate: new FormControl(this.person ? this.person.startDate : ''),
          email: new FormControl(this.person ? this.person.email : ''),
          personNo: new FormControl(this.person ? this.person.personNo : '', Validators.required),
          imageUrl: new FormControl(this.person ? this.person.imageUrl : ''),
        });
      },
      error => this.errorMessage = <any>error);
  }

  savePerson(formValues) {
    if (this.profileForm.valid) {
      let person: IPerson = {
        personId: this.person.personId,
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
      this.updatePerson.emit(person);
      this._router.navigate(['/personsAdmin']);
    }
  }

  cancel() {
    this._router.navigate(['/personsAdmin']);
  }
}
