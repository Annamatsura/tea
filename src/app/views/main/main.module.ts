import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import {MainComponent} from "./main.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {NgbAccordionModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,

    MainRoutingModule,
    NgbAccordionModule
  ],
  exports: [
    MainComponent,
    MainRoutingModule
  ]
})
export class MainModule { }
