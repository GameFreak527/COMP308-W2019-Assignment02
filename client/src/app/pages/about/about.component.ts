import { Component, OnInit } from "@angular/core";
import { MasterPageComponent } from "../partials/master-page/master-page.component";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent extends MasterPageComponent implements OnInit {
  constructor(route: ActivatedRoute) {
    super(route);
  }

  ngOnInit() {}
}
