import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly productoApiUrl = "https://localhost:7131/api"

  constructor( private http:HttpClient) { }

  getProductoList():Observable<any[]>{
    return this.http.get<any>(this.productoApiUrl + '/Productos')
  }

  addProducto(data:any){
    return this.http.post(this.productoApiUrl + '/Productos',data)
  }

  updateProducto(id:number|string, data:any){
    return this.http.put(this.productoApiUrl + '/Productos/${id}',data)
  }

  deleteProducto(id:number|string){
    return this.http.delete(this.productoApiUrl + '/Productos/${id}')
  }
}
