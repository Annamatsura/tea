import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CatalogComponent} from "./catalog.component";
import {ProductComponent} from "../../shared/components/product/product.component";

const routes: Routes = [
  { path: 'catalog', component: CatalogComponent},
  { path: 'catalog/:id', component: ProductComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
