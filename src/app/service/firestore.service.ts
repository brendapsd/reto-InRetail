import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Client } from  '../models/client'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  clientsCollection: AngularFirestoreCollection<Client>;
  clients: Observable<Client[]>; 
  clientsDoc; 

  constructor(public db: AngularFirestore) { 
    this.clientsCollection = this.db.collection('clients');
    this.clients = this.db.collection('clients').valueChanges();
  }

  getClients() {
    return this.clients;
  }

  addClient(client: Client) {
    this.clientsCollection.add(client); 
  }
}
