import { Component, OnInit } from '@angular/core';
import { IPerson } from '../shared/person';
import { PersonService } from '../shared/person.service';

@Component({
  moduleId: module.id,
  selector: 'person-list',
  templateUrl: 'person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  imageWidth: number = 100;
  persons: IPerson[] = [];
  addMode: boolean = false;
  errorMessage: string;
  constructor(private _personService: PersonService) {
  }

  saveNewPerson(person: IPerson) {
    const nextId = Math.max.apply(null, this.persons.map(s => s.personId)) + 1;
    person.personId = nextId;
    console.log(person);
    this.persons.push(person);
   // this._personService.savePerson(person);
    this.addMode = false;
  }

  addPerson() {
    this.addMode = true;
  }
  cancelNewPerson(){
    this.addMode = false;
  }
  ngOnInit() {
    this._personService.getPersons()
      .subscribe(persons => this.persons = persons,
        error => this.errorMessage = <any>error);
  }
}
