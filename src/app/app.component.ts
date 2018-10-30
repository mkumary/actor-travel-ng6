import { Component, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "luxoft-assignment";
  size = 10;
  onUpdate(event) {
    this.size = event.size;
  }
}
