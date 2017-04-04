import { IPerson } from './person';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class PersonService {
  private _personUrl = 'src/api/persons/persons.json';

  constructor(private _http: Http) {
  }

  getPersons(): Observable<IPerson[]> {
    return this._http.get(this._personUrl)
      .map((response: Response) => <IPerson[]> response.json())
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  getPerson(id: number): Observable<IPerson> {
    return this.getPersons()
      .map((persons: IPerson[]) => persons.find(p => p.personId === id));
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
