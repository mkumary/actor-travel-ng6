import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ActorService } from "../actor.service";
import {} from "events";

@Component({
  selector: "app-action-buttons",
  templateUrl: "./action-buttons.component.html",
  styleUrls: ["./action-buttons.component.css"]
})
export class ActionButtonsComponent implements OnInit {
  constructor(private actorService: ActorService) {}
  @Output()
  moveActor = new EventEmitter<any>();
  @Output()
  stepAdded = new EventEmitter<any>();

  ngOnInit() {}
  moveUp() {
    this.actorService.addSteps("up");
    this.stepAdded.emit("added");
  }
  moveDown() {
    this.actorService.addSteps("down");
    this.stepAdded.emit("added");
  }
  moveLeft() {
    this.actorService.addSteps("left");
    this.stepAdded.emit("added");
  }
  moveRight() {
    this.actorService.addSteps("right");
    this.stepAdded.emit("added");
  }
  play() {
    var steps = this.actorService.getSteps();
    this.moveActor.emit({ moveNames: steps });
    this.actorService.resetSteps();
  }
}
