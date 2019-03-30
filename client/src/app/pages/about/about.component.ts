/*
About Code Behind File
Name - Shiv Rana
Student Id - 300990505
Date - Mar-30-2019
*/

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent implements OnInit {
  title : String;
  constructor(
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.title = this.title = this.activatedRoute.snapshot.data.title;

  }
}
