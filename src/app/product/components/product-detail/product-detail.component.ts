import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService} from '../../../core/services/products/products.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    });
  }

  fetchProduct(id: string): void{
    this.productService.getProduct(id).subscribe((product: Product) => {
      this.product = product;
      console.log(this.product);
    });
  }

  createProduct(): void{
    const newProduct: Product = {
      id: '333',
      title: 'nuevo producto angular',
      image: 'assets/images/banner-2.jpg',
      price: 34990,
      description: 'producto creado desde metodo de angular'
    };

    this.productService.createProduct(newProduct)
    .subscribe(product => {
      console.log('Producto creado con exito');
      console.log(product);
    });
  }

  updateProduct(): void{
    const newProduct: Partial<Product> = {
      title: 'producto angular editado',
      price: 5555,
    };
    this.productService.updateProduct('333', newProduct)
    .subscribe(product => {
      console.log('Producto actualizado con exito');
      console.log(product);
    });
  }

  deleteProduct(): void{
    this.productService.deleteProduct('333')
    .subscribe(rta =>{
      console.log(rta);
    });
  }
}
