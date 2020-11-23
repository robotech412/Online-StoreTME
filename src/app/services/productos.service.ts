import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Producto } from '../models/Productos'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URI = 'http://localhost:3020/api'

  constructor(private http: HttpClient) {
   }

  getProductos(){
    return this.http.get(`${this.API_URI}/productos`);
  }

  getProducto(id: string){
    return this.http.get(`${this.API_URI}/productos/${id}`);
  }

  deleteProducto(id: string){
    return this.http.delete(`${this.API_URI}/productos/${id}`);
  }

  updateProducto(id: string|number, updateProducto: Producto): Observable<Producto>{
    return this.http.put(`${this.API_URI}/productos/${id}`, updateProducto);
  }

  saveProducto(producto: Producto){
    return this.http.post(`${this.API_URI}/productos`, producto);
  }
}