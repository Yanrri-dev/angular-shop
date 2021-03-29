import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import { Product } from '../../models/product.model';

import {environment } from '../../../../environments/environment';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {



  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.url_api}products`);
  }

  getProduct(id: string): Observable<Product>{
    return this.http.get<Product>(`${environment.url_api}products/${id}`);
  }

  createProduct(product: Product) {
    return this.http.post(`${environment.url_api}products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>){
    return this.http.put(`${environment.url_api}products/${id}`, changes);
  }

  deleteProduct(id: string){
    return this.http.delete(`${environment.url_api}products/${id}`);
  }

}
