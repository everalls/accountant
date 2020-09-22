import { Component } from "@angular/core";
import { MediaMatcher } from "@angular/cdk/layout";

@Component({
  selector: "app-tool-bar",
  templateUrl: "./tool-bar.component.html",
  styleUrls: ["./tool-bar.component.css"],
})
export class ToolBarComponent {
  mobileQuery: MediaQueryList;

  constructor(private media: MediaMatcher) {}

  ngOnInit() {
    this.mobileQuery = this.media.matchMedia("(max-width: 1200px)");
  }
}
