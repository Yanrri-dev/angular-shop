import {
        Component,
        Input,
        Output,
        EventEmitter,
        OnChanges,
        SimpleChanges,
        OnInit,
        DoCheck,
        OnDestroy} from '@angular/core';

import { Product } from '../product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})

export class ProductComponent implements DoCheck, OnInit, OnDestroy {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  constructor(){
    console.log('1. constructor');
  }

 /*  ngOnChanges(changes: SimpleChanges): void{
    console.log('2. ngOnChanges');
    console.log(changes);
  } */

  ngOnInit(): void{
    console.log('3. ngOnInit');
  }

  ngDoCheck(): void {
    console.log('4. ngDoCheck');
  }

  ngOnDestroy(): void{
    console.log('5. ngDestroy');
  }

  addCart(): void {
    console.log('estoy en el carrito');
    this.productClicked.emit(this.product.id);
  }

}
