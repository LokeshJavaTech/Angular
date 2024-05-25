import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

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

  cartCount: number = 0;

  decrementCartValue(){
    this.cartCount--;

  }
  incrementCartValue(){
    this.cartCount++;
  }

  searchText_container: string = '';

  searchTextInputEventReceivedMethod(searchTextReceived: string) {
    console.log("Container component: Search text is received from app-search component = "+searchTextReceived);
    this.searchText_container = searchTextReceived;
  }

}
