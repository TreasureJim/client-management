import { Injectable, TemplateRef } from '@angular/core';
import { Observable, of, Subject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import * as apiAddress from '../../api-config.json';

import { Client } from '../../data/Client';
import { CircleArray } from '../../data/CircularArray';

@Injectable({
  providedIn: 'root',
})
export class ClientService {

  recentClients: CircleArray<number>;

  constructor(private http: HttpClient) {}


  public getRecentClients() {
    return this.recentClients.array;
  }
  public getClients(searchTerm: string): Observable<Client[]> {
    let address = apiAddress.api + apiAddress.address.client;
    return this.http.get<Client[]>(address)
      .pipe(
        catchError( (err, caught) => {
          this.error("GetClient", err);
          return throwError(err);
        })
        );
  }


  // Logging and Error
  private log(operation: string, message: string): void {
    console.error(`ClientService: ${operation}: ${message}`);
  }
  private error(operation: string, message: string): void {
    console.error(`ClientService Error: ${operation}: ${message}`);
  }
}
