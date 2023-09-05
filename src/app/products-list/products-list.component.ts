import { Component } from '@angular/core';
import { Products } from '../interface/products';

import products from "../../productsJsonFile.json"


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
 
  products:Products[]=products;

  
}
