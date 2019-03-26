import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-master-page",
  templateUrl: "./master-page.component.html",
  styleUrls: ["./master-page.component.css"]
})
export class MasterPageComponent implements OnInit {
  title: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
  }
}
