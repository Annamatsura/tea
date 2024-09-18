import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductType[]>{
    console.log('qqq1');
    return this.http.get<ProductType[]>('https://testologia.ru/tea', {})
  }
  getProduct(id: number): Observable<ProductType>{
    console.log('qqq');
    return this.http.get<ProductType>(`https://testologia.ru/tea?id=${id}`);
  }

  createOrder(data: {name: string, last_name: string, phone: string, country: string, zip: string, product: string, address: string, comment: string | undefined | null}){
    return this.http.post<{ success: boolean, message?: string }>(`https://testologia.ru/order-tea`, data);
  }

}
