import { Component, OnInit, Input } from "@angular/core";
import { ActorService } from "../actor.service";

@Component({
  selector: "app-steps-list",
  templateUrl: "./steps-list.component.html",
  styleUrls: ["./steps-list.component.css"]
})
export class StepsListComponent implements OnInit {
  @Input()
  steps: Number;
  constructor(private actorService: ActorService) {}

  ngOnInit() {}
}
