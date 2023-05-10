import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/models/product";
import { CartListService } from "src/app/services/cart-list.service";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  styleUrls: ["./cart-item.component.css"]
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Product;
  @Output() removeItem: EventEmitter<Product> = new EventEmitter();

  constructor(private CartListService: CartListService) {
    this.cartItem = {
      name: "",
      price: 0,
      url: "",
      description: "",
      availableAmount: 0,
      selectedAmount: 0
    };
  }

  ngOnInit(): void {}

  removeFromCart(cartItem: Product): void {
    this.CartListService.removeFromCart(cartItem);
    this.CartListService.getTotalPrice();
    alert(
      `${cartItem.selectedAmount} x ${cartItem.name} removed from your cart.`
    );
  }
  // this.CartListService.removeFromCart
  // this.removeItem.emit(cartItem);
  // alert(
  //   `${this.cartItem.name} has been remove!`
  // );
}
