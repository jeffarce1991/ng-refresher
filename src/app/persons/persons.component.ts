import { Component, Input, OnInit } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit {
  personList: string[];

  //private personsService: PersonsService

  constructor(private personsService: PersonsService) {
    //this.personList = personService.persons
    //this.personsService = personService
  }
  ngOnInit() {
    this.personList = this.personsService.persons
  }
}
