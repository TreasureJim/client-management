import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Client } from './../data/Client';
import { ClientService } from './../services/ClientService.service';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap, startWith } from 'rxjs/operators';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.scss'],
  animations: [

  ]
})
export class ClientSearchComponent implements OnInit {

  filteredClients$: Observable<Client[]>;

  myControl = new FormControl();
  private searchTerms = new Subject<string>();

  constructor(private clientService: ClientService) {}
  ngOnInit(): void {
    this.filteredClients$ = this.myControl.valueChanges.pipe(
      // shows results even if there isn't anything in search
      // startWith(''),

      // wait 100 milliseconds before updating search to make less intensive
      debounceTime(300),
      // dont make new query if search term hasn't changed
      distinctUntilChanged(),
      // Get filtered results
      map( (term: string) => this.clientService.searchClients(term) ) 
    );
  }

  search(term: string): void {
    // Add search term to observable queue
    this.searchTerms.next(term);
  }


  getClients() {
    this.clientService.getClients().subscribe((clients) => {
      this.clients$ = clients;
    });
  }
  displayFunction(subject) {
    return subject ? subject.name : undefined;
  }
}
