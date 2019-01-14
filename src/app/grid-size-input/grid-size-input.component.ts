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
  element = null;
  containerX = 0;
  containerY = 0;
  containerWidth = 0;
  containerHeight = 0;

  ngOnInit() {
    this.steps = this.actorService.getSteps();
    this.element = document.getElementById("actor");
  }
  moveQueue = [];
  moving = false;

  onSizeChange(event) {
    this.size = event.target.value;
    this.update.emit({
      size: event.target.value
    });
  }
  setBoundries() {
    let element = document.getElementsByTagName("table")[0];
    let boundries: any = element.getBoundingClientRect();
    this.containerX = boundries.x;
    this.containerY = boundries.y;
    this.containerWidth = boundries.width;
    this.containerHeight = boundries.height;
    return boundries;
  }
  onStepAdded() {
    this.steps = this.actorService.getSteps();
  }
  canMoveUp() {
    return this.containerHeight > Math.abs(this.element.offsetTop) + this.movementStep
  }
  canMoveDown() {
    return Math.abs(this.element.offsetTop) - this.movementStep > 0;
  }
  canmoveLeft() {
    return this.element.offsetLeft >  this.movementStep / 2;
  }
  canMoveRight() {
    return this.element.offsetLeft <  this.containerWidth - this.movementStep;
  }
  moveUp() {
    if (this.canMoveUp()) {
      let x = 0;
      let intervalId;
      const travel = () => {
        if (x < this.movementStep) {
          x = x + 1;
          this.element.style.top = this.element.offsetTop - 1 + "px";
        } else {
          clearInterval(intervalId);
          this.moving = false;
          this.move();
        }
      };
      intervalId = setInterval(travel, 5);
    } else {
      this.moving = false;
    }
  }
  moveDown() {
    if (this.canMoveDown()) {
      let x = 0;
      let intervalId;
      const travel = () => {
        if (x < this.movementStep) {
          x = x + 1;
          this.element.style.top = this.element.offsetTop + 1 + "px";
        } else {
          clearInterval(intervalId);
          this.moving = false;
          this.move();
        }
      };
      intervalId = setInterval(travel, 5);
    } else {
      this.moving = false;
    }
  }
  moveLeft() {
    if (this.canmoveLeft()) {
      let x = 0;
      let intervalId;
      const travel = () => {
        if (x < this.movementStep) {
          x = x + 1;
          this.element.style.left = this.element.offsetLeft - 1 + "px";
        } else {
          clearInterval(intervalId);
          this.moving = false;
          this.move();
        }
      };
      intervalId = setInterval(travel, 5);
    } else {
      this.moving = false;
    }
  }
  moveRight() {
    if (this.canMoveRight()) {
      let x = 0;
      let intervalId;
      const travel = () => {
        if (x < this.movementStep) {
          x = x + 1;
          this.element.style.left = this.element.offsetLeft + 1 + "px";
        } else {
          clearInterval(intervalId);
          this.moving = false;
          this.move();
        }
      };
      intervalId = setInterval(travel, 5);
    } else {
      this.moving = false;
    }
  }
  move() {
    if (this.moving === false && this.allowedMoving) {
      var move = this.moveQueue.shift();
      if (move) {
        this.moving = true;
        if (move === "up") {
          this.moveUp();
        }
        if (move === "down") {
          this.moveDown();
        }
        if (move === "left") {
          this.moveLeft();
        }
        if (move === "right") {
          this.moveRight();
        }
      } else {
        console.log("movements stopped");
      }
    } else if (!this.allowedMoving) {
      this.steps = [];
    }
  }

  onMoveTarget(event) {
    var boundries = this.setBoundries();
    this.moveQueue = event.moveNames;
    this.move();
  }
}
