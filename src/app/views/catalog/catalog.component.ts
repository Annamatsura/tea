import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../shared/types/product.type";
import {ProductService} from "../../shared/services/product.service";
import {Router} from "@angular/router";
import {tap} from "rxjs";


@Component({
  selector: 'catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss',]
})
export class CatalogComponent implements OnInit{
  // https://testologia.ru/tea

  public products: ProductType[] = [];
  public loading: boolean = false;

  constructor(private productService: ProductService,  private router: Router) {
  }

  ngOnInit() {
    console.log(1);
    this.loading = true;
    this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
          console.log(2);
        })

      )
      .subscribe(
        {
          next: (data)  => {
            this.products = data;
            console.log(data);
            console.log(3);
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['']);
          }
        }

      )
  }
}
