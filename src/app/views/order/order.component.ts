import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../shared/services/product.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit, OnDestroy{
  signInForm = new FormGroup({
    product: new FormControl({value: '', disabled: true}),
    name: new FormControl('', [Validators.required, Validators.pattern('[А-Яа-я ]*')]),
    surname: new FormControl('', [Validators.required, Validators.pattern('[А-Яа-я ]*')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('(\\s*)?(\\+)?([- _():=+]?\\d[- _():=+]?){10,14}(\\s*)?$')]),
    country: new FormControl('', [Validators.required]),
    zip: new FormControl('', [Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(6), Validators.maxLength(6)]),
    address: new FormControl('', [Validators.required, Validators.pattern('[А-Яа-я0-9\\/\\s-]*')]),
    comment: new FormControl('', []),
  });


  constructor(private activatedRoute : ActivatedRoute, private productService: ProductService) {
  }

  private subscription: Subscription | null = null;
  private subscriptionOrder: Subscription | null = null;

  public thanksDiv = false;
  public errorDiv = false;
  public formDiv = true;

  private productName: string = '';


  ngOnInit() {
    this.subscription = this.activatedRoute.queryParams.subscribe((params) => {
      if (params['product']){
        this.productName = params['product'];
        this.signInForm.patchValue({
          product: params['product'],
        });
      }
    });
  }

  get product(){
    return this.signInForm.get('product');
  }

  get name(){
    return this.signInForm.get('name');
  }

  get surname(){
    return this.signInForm.get('surname');
  }

  get phone(){
    return this.signInForm.get('phone');
  }

  get country(){
    return this.signInForm.get('country');
  }

  get zip(){
    return this.signInForm.get('zip');
  }

  get address(){
    return this.signInForm.get('address');
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
    this.subscriptionOrder?.unsubscribe();
  }



  createOrder(){
    if (this.signInForm.value.name && this.signInForm.value.surname &&
      this.signInForm.value.phone && this.signInForm.value.country &&
      this.signInForm.value.zip && this.productName &&
      this.signInForm.value.address
    ) {
      this.subscriptionOrder = this.productService.createOrder({
        name: this.signInForm.value.name,
        last_name: this.signInForm.value.surname,
        phone: this.signInForm.value.phone,
        country: this.signInForm.value.country,
        zip: this.signInForm.value.zip,
        product: this.productName,
        address: this.signInForm.value.address,
        comment: this.signInForm.value.comment,
      })
        .subscribe(response => {
          if (response.success && !response.message){
            this.formDiv = false;
            this.errorDiv = false;
            this.thanksDiv = true;
          } else {
            this.errorDiv = true;
          }
        })
    } else {
      this.errorDiv = true;
    }
  }
}
