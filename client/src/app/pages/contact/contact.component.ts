import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  title : String;
  constructor(
    private authService : AuthService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.title = this.title = this.activatedRoute.snapshot.data.title;

  }

  isLoggedIn():boolean{
    return this.authService.loggedIn();
  }
}
