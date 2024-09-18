import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./views/layout.component";


const routes: Routes = [
  { //ленивая загрузка
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./views/main/main.module').then(m => m.MainModule)},
      {path: '', loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule)},
      {path: '', loadChildren: () => import('./views/catalog/catalog.module').then(m => m.CatalogModule)},
    ]
  },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
