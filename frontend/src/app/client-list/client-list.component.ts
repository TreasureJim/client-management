import { Observable } from 'rxjs';
import { ClientService } from './../services/ClientService.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../data/Client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  clients$: Client[] = [];

  constructor(private clientService: ClientService) { }
  ngOnInit(): void {
    this.clientService.getClients().subscribe(
      (clients) => { this.clients$ = clients; }
    );
  }


}
