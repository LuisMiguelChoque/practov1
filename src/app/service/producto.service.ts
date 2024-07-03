import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url : string ="https://dummyjson.com/products";
  
  constructor(private http:HttpClient) {

  }
  public getProductos(){
    return this.http.get(this.url);
  }
}
