/*
Services Code Behind File
Name - Shiv Rana
Student Id - 300990505
Date - Mar-30-2019
*/


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  title : String;
  constructor() {
  }

  ngOnInit() {
    this.title = "Services";
  }

}
