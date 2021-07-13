import { Injectable, TemplateRef } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import * as apiAddress from '../../api-config.json';

import { Client } from '../../data/Client';
import { CircleArray } from '../../data/CircularArray';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  
  recentClients: CircleArray<number>;

  constructor(private http: HttpClient) {
    this.recentClients = new CircleArray<number>();
  }

  
  public getRecentClients() {
    return this.recentClients.array;
  }
  public getClient(id: number): Observable<any> {
    let address = apiAddress.api + apiAddress.address.client;
    return this.http.get<Client[]>(address);
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
