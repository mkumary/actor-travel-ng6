import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ActorService {
  steps = [];
  constructor() {}
  actor = {
    position: ""
  };
  getSteps() {
    return this.steps;
  }
  resetSteps() {
    this.steps = [];
  }
  addSteps(step) {
    this.steps.push(step);
    console.log(this.steps);
  }
}
