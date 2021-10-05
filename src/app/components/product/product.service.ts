import { Product } from './product.model';
import { HttpClient } from '@Angular/common/http';
import { MatSnackBar } from '@Angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 private baseurl = "http://localhost:3001/products";

  constructor(private snack: MatSnackBar,
              private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snack.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(product: Product): Observable<Product>{
    return this.http.post<Product> (this.baseurl, product);
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]> (this.baseurl);
  }
  
  readById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.baseurl}/${id}`)
  }

  update(product: Product):Observable<Product>{
    return this.http.put<Product>(`${this.baseurl}/${product.id}`, product)
  }

}
