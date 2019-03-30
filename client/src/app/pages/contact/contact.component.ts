/*
Contact Code Behind File
Name - Shiv Rana
Student Id - 300990505
Date - Mar-30-2019
*/


import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  title: String;
  fullName: String;
  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private flashMessage: FlashMessagesService
  ) {}

  ngOnInit() {
    this.title = this.title = this.activatedRoute.snapshot.data.title;
  }

  isLoggedIn(): boolean {
    return this.authService.loggedIn();
  }

  onSubmitClick(): void {
    this.flashMessage.show("I got your message " + this.fullName, {
      cssClass: "alert-success",
      timeOut: 3000
    });
  }
}
