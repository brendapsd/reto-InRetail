import { Component, OnInit } from '@angular/core';

import { FirestoreService } from '../../service/firestore.service'

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  clients = []; 
  
  constructor(public firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.getClients().subscribe(clients => {
      this.clients = clients; 
    });
  }

  getAverage(){
    return parseFloat(((this.clients.reduce((total ,client) => total + client.age, 0))
    /this.clients.length).toFixed(2));
    // console.log(this.clients)
  }

  getStandardDeviation(){
    const average = this.getAverage();
  
    const arrSubtraction = this.clients.map(client => Math.pow((client.age - average), 2));

    const sumSubtraction = (arrSubtraction.reduce((total, resultArr) => total + resultArr, 0));

    const divSum = sumSubtraction/this.clients.length;

    return  parseFloat(Math.sqrt(divSum).toFixed(2));
  }

}
