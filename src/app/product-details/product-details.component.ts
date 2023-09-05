import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Products } from '../interface/products';

import products from "../../productsJsonFile.json"

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {

  products:Products[]=products;

  prodDetails: any;
  prodId: any;

  x: any =localStorage.getItem("SimpleMyPr");
  myProduct=JSON.parse(this.x)?JSON.parse(this.x): [];
  porx: any = {};


  constructor(public _ActivatedRoute: ActivatedRoute, public _router: Router) {
    this.prodId = this._ActivatedRoute.snapshot.paramMap.get('proId');

    this.prodDetails = this.products.find((ele: any) => {
      return ele.id == this.prodId;
    });

    console.log(this.prodDetails);
  }

  backHome() {
    this._router.navigate(['home']);
  }


  // addPro(proId: any) {
  //   if (this.myProduct.length == 0) {
  //     this.myProduct.push(proId);
  //     console.log('firstelement');
  //     console.log('cccccccc', proId);
  //     localStorage.setItem("SimpleMyPr",JSON.stringify(this.myProduct))

  //   } else {
  //     this.myProduct=this.myProduct.filter((ele:any)=>{
  //       console.log("ele",ele);
  //       return ele != proId;

  //     });
  //    this.myProduct.push(proId);

  //    localStorage.setItem("SimpleMyPr",JSON.stringify(this.myProduct))
      
  //   }
  // }

  goToCartList() {
    this._router.navigate(['addTocartx'], {
      queryParams: this.myProduct,
    });
  }
}
