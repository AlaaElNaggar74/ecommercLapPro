import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() inputCardToChild: any;

  constructor(public _router: Router) {}

  getProductInfo(productId: any) {
    this._router.navigate(['details', productId]);
  }
}
