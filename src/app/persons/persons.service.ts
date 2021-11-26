import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Person } from './persons.model';

@Injectable({
  providedIn: 'root',
})
export class PersonsService {
  private personsUrl = 'api/persons/';
  min = 10;
  max = 1000;

  constructor(private http: HttpClient) {}

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  createPerson(person: Person): Observable<Person> {
    person.id = Math.floor(
      Math.random() * (this.max - this.min + 1) + this.min
    );
    return this.http.post<Person>(this.personsUrl, person).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  editPerson(product: Person): Observable<any> {
    return this.http.put(this.personsUrl + product.id, product);
  }

  deletePerson(id: number): Observable<any> {
    return this.http.delete(this.personsUrl + id);
  }
}
