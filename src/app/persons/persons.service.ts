import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PersonsService {
  persons: string[] = ['Jeff', 'Jeanne', 'Janine'];

}
