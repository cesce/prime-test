import { Component, OnInit } from '@angular/core';
import { Person } from './persons.model';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss'],
})
export class PersonsComponent implements OnInit {
  person = {
    id: -1,
    first_name: '',
    last_name: '',
    middle_name: '',
    personal_number: '',
    email: '',
    phone_number: '',
    photo: '',
  };
  edit = true;
  add = false;
  persons: Person[] = [];

  constructor(private personsService: PersonsService) {}

  ngOnInit(): void {
    this.getPersons();
  }

  getPersons() {
    this.personsService.getPersons().subscribe((persons) => {
      this.persons = persons;
      console.log(persons);
    });
  }

  addPerson(person: Person) {
    this.personsService.createPerson(person).subscribe((response) => {
      console.log(response);
      this.getPersons();
    });
  }

  setPersonEdit(person: Person) {
    this.person.first_name = person.first_name;
    this.person.id = person.id;
    this.edit = false;
    this.add = true;
  }

  resetValues() {
    this.person.first_name = '';
    this.person.id = -1;
    this.edit = true;
    this.add = false;
  }

  removePerson(person: Person) {
    console.log(person);
    this.personsService
      .deletePerson(person.id)
      .subscribe((product) => console.log(product));
    this.getPersons();
  }

  updatePerson(person: Person) {
    this.personsService
      .editPerson(person)
      .subscribe((response) => console.log(response));
    this.getPersons();
    this.resetValues();
  }
}
