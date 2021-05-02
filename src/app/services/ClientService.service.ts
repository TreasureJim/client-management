import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, TemplateRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

import { Client } from '../data/Client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  clients$: Observable<any[]>;
  
  constructor(store: AngularFirestore) {
    this.clients$ = store.collection('clients').valueChanges();
  }

  // Return all clients
  getClients(): Observable<Client[]> {
    return this.clients$.pipe(
      tap(_ => this.log('fetched clients'))
    );
  }
  // Return clients fitting string name filter
  getFilteredClients(term: string): Observable<Client[]> {
    return this.clients$.pipe(
      tap( _ => this.log('fetched clients')), 
      map( _ => this._filter(term) )
    );
  }


  private _filter(value: string): Observable<Client[]> {
    const filterValue = value.toLowerCase();
    return this.clients$.pipe(
       filter( (client) => client.name.toLowerCase().includes(filterValue))
      );
  }
  // Logging and Error
  private handleError<T>(operation: string = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string): void {
    console.log(`ClientService: ${message}`);
  }
}
