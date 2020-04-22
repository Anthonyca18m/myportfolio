import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { MessageI } from '../interfaces/message-contact.interface';


@Injectable({
  providedIn: 'root'
})


export class ContactFormService {

  private contactCollection : AngularFirestoreCollection<MessageI>;

  constructor( private afs : AngularFirestore ) {

    this.contactCollection = afs.collection<MessageI>('contactForm');
   }

   saveMessage( newContact : MessageI): void {

    this.contactCollection.add( newContact );
   }
}
