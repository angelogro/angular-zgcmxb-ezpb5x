import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {products} from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
  constructor(
    private route: ActivatedRoute, //contains information about the activated route
    private cartService: CartService,
  ) { }

  ngOnInit() {
      // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    console.log(routeParams);
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}