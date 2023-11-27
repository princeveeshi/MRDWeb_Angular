import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IContact } from '../../DTOs/Contact/IContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'https://localhost:44378/api/PostContactData'; 

  constructor(private http: HttpClient) {}

  
  addContact(contact: IContact): Observable<any> {
    console.log('APi Url',this.apiUrl);
    return this.http.post(this.apiUrl, contact);

   
    
  }
}
