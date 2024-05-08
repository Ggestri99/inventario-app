import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private urlBase = 'http://localhost:8081/inventario-app/productos'

  constructor(
    private http: HttpClient,
  ) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.urlBase)
  }

  getProductoById(id:number) {
    return this.http.get<Producto>(`${this.urlBase}/${id}`)
  }

  addProducto(producto: any):Observable<Object> {
    return this.http.post(this.urlBase,producto)
  }

  updateProducto(id:number, producto: Producto | any):Observable<Object> {
    return this.http.put(`${this.urlBase}/${id}`,producto)
  }

  deleteProducto(id:number):Observable<Object> {
    return this.http.delete(`${this.urlBase}/${id}`)
  }

}
