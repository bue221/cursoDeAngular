import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';

import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: 'product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  // constructor() {
  //   console.log('Se ha creado el componente');
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('Buena la loca');
  //   console.log(changes);
  // }

  // ngOnInit() {
  //   console.log('ngOnInit');
  // }

  // ngDoCheck() {
  //   console.log('ngDoCheck');
  // }

  today = new Date();

  @Input()
  product!: Product;

  @Output()
  productClicked: EventEmitter<any> = new EventEmitter();

  // func
  addToCart() {
    alert('Buena ya lo añado al carro!!!!');
    this.productClicked.emit(this.product.id);
  }
}
