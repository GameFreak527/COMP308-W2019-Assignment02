import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { MasterPageComponent } from "../partials/master-page/master-page.component";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent extends MasterPageComponent implements OnInit {
  constructor(route: ActivatedRoute) {
    super(route);
  }
  ngOnInit() {}
}
