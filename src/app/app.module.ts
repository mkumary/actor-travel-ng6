import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { GridSizeInputComponent } from "./grid-size-input/grid-size-input.component";
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';
import { StepsListComponent } from './steps-list/steps-list.component';
import { GridPlotComponent } from './grid-plot/grid-plot.component';

@NgModule({
  declarations: [AppComponent, GridSizeInputComponent, ActionButtonsComponent, StepsListComponent, GridPlotComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
