import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { ActorService } from "../actor.service";

@Component({
  selector: "app-grid-size-input",
  templateUrl: "./grid-size-input.component.html",
  styleUrls: ["./grid-size-input.component.css"]
})
export class GridSizeInputComponent implements OnInit {
  constructor(private actorService: ActorService) {}
  @Input()
  size: Number;

  @Output()
  update = new EventEmitter<any>();

  steps = [];
  allowedMoving = true;
  movementStep = 56;

  ngOnInit() {
    this.steps = this.actorService.getSteps();
  }

  onSizeChange(event) {
    this.size = event.target.value;
    this.update.emit({
      size: event.target.value
    });
  }
  checkBoundary() {
    let element = document.getElementsByTagName("table")[0];
    let boundries: ClientRect = element.getBoundingClientRect();
    return boundries;
  }
  onStepAdded() {
    this.steps = this.actorService.getSteps();
  }
  onMoveTarget(event) {
    var boundries = this.checkBoundary();
    let moveNames = event.moveNames;
    var element = document.getElementById("actor");
    moveNames.forEach(moveName => {
      let elementBoundry = element.getBoundingClientRect();
      if (!this.allowedMoving) {
        console.log("you can not move beyond this");
        return;
      }
      if (moveName === "up") {
        let top: number = elementBoundry.top;
        top = top - this.movementStep;
        if (top < boundries.top) {
          this.allowedMoving = false;
          console.log("you can not move beyond this");
          return;
        } else {
          top = element.offsetTop - this.movementStep;
          element.style.top = top + "px";
        }
      }
      if (moveName === "down") {
        let top: number = elementBoundry.bottom;
        top = top + this.movementStep;
        if (top > boundries.bottom) {
          this.allowedMoving = false;
          console.log("you can not move beyond this");
          return;
        } else {
          top = element.offsetTop + this.movementStep;
          element.style.top = top + "px";
        }
      }
      if (moveName === "left") {
        let left: number = elementBoundry.left;
        left = left - 50;
        if (left < boundries.left) {
          this.allowedMoving = false;
          console.log("you can not move beyond this");
          return;
        } else {
          left = element.offsetLeft - this.movementStep;
          element.style.left = left + "px";
        }
      }
      if (moveName === "right") {
        let left: number = elementBoundry.right;
        left = left + 50;
        if (left > boundries.right) {
          this.allowedMoving = false;
          console.log("you can not move beyond this");
          return;
        } else {
          left = element.offsetLeft + this.movementStep;
          element.style.left = left + "px";
        }
      }
    });
    this.steps = [];
    this.allowedMoving = true;
  }
}
