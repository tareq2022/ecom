import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  constructor(private http : HttpClient) { }

  CreateProduct(data:any){
    return this.http.post(baseUrl + 'api/AddNewProduct',data);
  }

  Getproduct(){
    return this.http.get(baseUrl + 'api/Productsview');
  }
}
