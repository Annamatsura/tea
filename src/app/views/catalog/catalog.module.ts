import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {CatalogComponent} from "./catalog.component";



@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [

    CommonModule,
    RouterModule,
    SharedModule,

    CatalogRoutingModule
  ],
  exports: [
    CatalogComponent,
    CatalogRoutingModule
  ]
})
export class CatalogModule { }
