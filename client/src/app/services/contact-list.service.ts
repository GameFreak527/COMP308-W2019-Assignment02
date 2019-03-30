/*
Contact Service
Name - Shiv Rana
Student Id - 300990505
Date - Mar-30-2019
*/


import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  private user : User;
  private contact : Contact;
  private authToken: any = null;

  private endpoint = 'https://carrerportfolio2.herokuapp.com/api/contact/';
  //private endpoint = 'http://localhost:3000/api/contact/';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };


  constructor(private http: HttpClient) { }

  public getList(): Observable<any> {
    this.loadToken();
    return this.http.get<any>(this.endpoint, this.httpOptions);
  }

  public addContact(contact: Contact):Observable<any>{
    this.loadToken();
    return this.http.post<any>(this.endpoint+'add',contact,this.httpOptions);
  }

  public editContact(contact:Contact):Observable<any>{
    this.loadToken();
    return this.http.post<any>(this.endpoint +'edit/' + contact._id,contact,this.httpOptions);
  }

  public deleteContact(contact:Contact):Observable<any>{
    this.loadToken();
    return this.http.post<any>(this.endpoint +'delete/' + contact._id,contact,this.httpOptions);
  }

  public getContact(contact:Contact):Observable<any>{
    this.loadToken();
    return this.http.get<any>(this.endpoint +'edit/' + contact._id,this.httpOptions);
  }

  //Sends the token into the header to confirm the identity of user
  private loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
  }

}
