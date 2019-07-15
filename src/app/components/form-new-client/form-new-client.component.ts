import { Component, OnInit } from '@angular/core';

import { FirestoreService } from '../../service/firestore.service'
import { Client } from 'src/app/models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-new-client',
  templateUrl: './form-new-client.component.html',
  styleUrls: ['./form-new-client.component.css']
})
export class FormNewClientComponent implements OnInit {

  client = {} as Client ; 
  clients = []; 
  firstname: any;
  lastname: any;
  age: any;
  birthdate: any;

  constructor(public firestoreService: FirestoreService, private router: Router) { }

  ngOnInit() {
  }

  addClient() {
    if(this.client.firstname !== '' && this.client.lastname !== '' && this.client.age !== 0 && this.client.birthdate !== ''){
      const dataClient = {
        firstname: this.client.firstname,
        lastname: this.client.lastname,
        age: this.client.age,
        birthdate: this.client.birthdate,
        death: `${(parseInt(this.client.birthdate.substring(0,4))) +80}-${this.client.birthdate.substring(5,10)}`
      };
      this.firestoreService.addClient(dataClient);
      console.log(this.client)
      this.client = {} as Client;
      return this.router.navigateByUrl('/');
    }
  }
}
