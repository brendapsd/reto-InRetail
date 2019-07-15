import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/service/firestore.service';

@Component({
  selector: 'app-proj-client',
  templateUrl: './proj-client.component.html',
  styleUrls: ['./proj-client.component.css']
})
export class ProjClientComponent implements OnInit {

  clients = []; 

  constructor(public firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.getClients().subscribe(clients => {
      this.clients = clients; 
    }); 
  }

}
