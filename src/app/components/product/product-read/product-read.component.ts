import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products : Product[] = []
  displayedColumns = ['id','name','price','action'];

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void{
    this.productService.read().subscribe((data) => {
      this.products = data;
    })
  }
  
  delete(id: string): void {
    if(confirm("Deseja realmente excluir? ")){
        this.productService.delete(id).subscribe(() => window.location.reload())
    }
  }
}
