import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductType} from "../../types/product.type";
import {ProductService} from "../../services/product.service";


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  product: ProductType;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.product =  {
      id: 0,
      image: '',
      price: 0,
      title: '',
      description: ''
    }
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']){
        this.productService.getProduct(+params['id']).subscribe({
          next: (data) => {
            this.product = data;
          },
          error: (error) => {
            console.log(error);
            this.router.navigate(['/']);
          }
        });
      }
    })
  }

}
