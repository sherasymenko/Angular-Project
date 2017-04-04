import {  PipeTransform, Pipe } from '@angular/core';
import { IPerson } from '../shared/person';


@Pipe({
    name: 'personFilter'
})
export class PersonFilterPipe implements PipeTransform {

    transform(value: IPerson[], filterBy: string): IPerson[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((person: IPerson) =>
            (person.fName.toLocaleLowerCase()+ " " + person.lName.toLocaleLowerCase()).indexOf(filterBy) !== -1) : value;
    }
}
