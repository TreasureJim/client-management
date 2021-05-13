import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Injectable, TemplateRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, filter } from 'rxjs/operators';

import { Client } from '../data/Client';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  filteredClients$: Observable<Client[]>;
  filteredClientsRef: AngularFirestoreCollection<Client>;

  constructor(db: AngularFirestore) {
    this.filteredClientsRef = db.collection<Client>('clients');
    this.filteredClients$ = this.filteredClientsRef.valueChanges();
  }

  // Return all clients
  getClients(): Observable<Client[]> {
    return this.filteredClients$.pipe(
      tap((_) => this.log('fetched clients'))
      );
  }
  getFilteredClients(term: string): Observable<Client[]> {
    const searchTerm = term.toLowerCase();

    return;
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
