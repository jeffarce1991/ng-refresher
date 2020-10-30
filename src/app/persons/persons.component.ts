import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[];
  private subscription: Subscription;

  //private personsService: PersonsService

  constructor(private personsService: PersonsService) {
    //this.personList = personService.persons
    //this.personsService = personService
  }

  ngOnInit() {
    this.personList = this.personsService.persons;
    this.subscription = this.personsService.personsChanged.subscribe(persons => {
      this.personList = persons;
    });
  }

  onRemovePerson(name: string) {
    this.personsService.removePerson(name)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
