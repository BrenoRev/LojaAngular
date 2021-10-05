import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { HomeComponent } from './views/home/home.component';
import { ProductComponent } from './views/product/product.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent,
},
{
  path: "products",
  component: ProductComponent
},{
  path: "products/create",
  component: ProductCreateComponent
},{
  path: "products/update/:id",
  component:ProductUpdateComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
