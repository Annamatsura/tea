import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TextCutPipe} from "./pipes/text-cut.pipe";
import {RouterModule} from "@angular/router";
import {ProductComponent} from "./components/product/product.component";


@NgModule({
  declarations: [
    ProductComponent,
    TextCutPipe,
  ],
  exports: [
    ProductComponent,
    TextCutPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
