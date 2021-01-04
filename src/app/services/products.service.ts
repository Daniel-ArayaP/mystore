import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Api} from '../config.js'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private api:String = Api.url;

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(`${this.api}products.json`);
  }
}
