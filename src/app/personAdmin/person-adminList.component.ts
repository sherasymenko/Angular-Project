import { Component, OnInit } from '@angular/core';
import { IPerson } from '../shared/person';
import { PersonService } from '../shared/person.service';
import { Router } from '@angular/router';
@Component({
  moduleId: module.id,
  selector: 'person-adminList',
  templateUrl: 'person-AdminList.component.html',
  styleUrls: ['./person-adminList.component.css']
})
export class PersonAdminListComponent implements OnInit {
  imageWidth: number = 100;
  persons: IPerson[] = [];
  addMode: boolean = false;
  errorMessage: string;
  listFilter: string;

  constructor(private _personService: PersonService, private _router: Router) {}

  ngOnInit() {
    this._personService.getPersons()
      .subscribe(persons => this.persons = persons,
        error => this.errorMessage = <any>error);
  }

  saveNewPerson(person: IPerson) {
    const nextId = Math.max.apply(null, this.persons.map(s => s.personId)) + 1;
    person.personId = nextId;
    console.log(person);
    this.persons.push(person);
    this.addMode = false;
  }

  updatePerson(person: IPerson) {
    console.log(person);
    this.persons.push(person);
    this.addMode = false;
  }

  addPerson() {
    this.addMode = true;
  }

  cancelNewPerson(){
    this.addMode = false;
  }
}
