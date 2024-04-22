import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  product = {
    name: 'iPhone X',
    price: 789,
    color: 'Black',
    discountPercentage: 5.5,
    inStockQty: 10,
    pImage: '/assets/images/products/iphonex.jpg'
  }

  getDiscountedPrice() {
    return this.product.price - (this.product.price * this.product.discountPercentage / 100)
  }

}
