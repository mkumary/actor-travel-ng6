import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-grid-plot",
  templateUrl: "./grid-plot.component.html",
  styleUrls: ["./grid-plot.component.css"]
})
export class GridPlotComponent implements OnInit {
  constructor() {}
  @Input()
  size: Number;
  @Input()
  moveNames: String;
  range = new Array(this.size);
  ngOnInit() {
    this.range = new Array(this.size);
  }
  ngOnChanges() {
    this.range = new Array(+this.size);
  }
}
