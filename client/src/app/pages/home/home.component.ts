import { Component, OnInit } from "@angular/core";
import { MasterPageComponent } from "../partials/master-page/master-page.component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent extends MasterPageComponent implements OnInit {
  constructor(route: ActivatedRoute) {
    super(route);
  }

  ngOnInit() {}
}
