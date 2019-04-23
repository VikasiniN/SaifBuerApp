import { Component, OnInit } from '@angular/core';
import { AccountService } from './../../account.service';
import {Booking} from '../../../shared/model/booking.model';
import {Product} from '../../../shared/model/product.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  userId: string;
  booking: Booking;
  productModel: Product;
  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.getCards();
    this.getProducts();
  }
  getCards() {
    this.userId = sessionStorage.getItem('userId');
    this.accountService.getCustomerOrderDetails(this.userId).subscribe(data => {
    this.booking = data;
    }, error => {
      console.log(error);
    });
  }
  getProducts() {
    this.accountService.getProducts().subscribe(data => {
      this.productModel = data;
      console.log('products', data);
    }, err => {
      console.log(err);
    });
  }
}
