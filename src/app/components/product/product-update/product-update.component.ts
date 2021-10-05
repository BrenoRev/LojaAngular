import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product! : Product;
  
  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Pegar o parametro da url
    let id = this.route.snapshot.paramMap.get('id')
    
    // Pegar o objeto pelo id
    this.productService.readById(id!).subscribe((product) => {

      this.product = product;
    })
  }

  updateProduct():void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Operação executada com sucesso!")
  })

  this.cancel();

}

  cancel(): void {
    this.router.navigateByUrl("/products")
  }
}
