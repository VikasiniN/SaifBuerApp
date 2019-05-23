import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { mobileNumber } from './../../shared/validation';
import {HomeService} from '../home.service';
import {BulkRegModel} from './bulk.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-buy-in-bulk',
  templateUrl: './buy-in-bulk.component.html',
  styleUrls: ['./buy-in-bulk.component.css']
})
export class BuyInBulkComponent implements OnInit {
  regForm: FormGroup;
  bulkModel: BulkRegModel;
  message;
  action;
  constructor(private fb: FormBuilder, private router: Router, private homeService: HomeService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.createForm();
  }
createForm() {
  this.regForm = this.fb.group({
    fullName: [''],
    emailId: ['', Validators.email],
    mobileNumber: ['', mobileNumber],
    city: [''],
    products: ['']

  });
}
onSubmit() {
  this.message = 'Bulk Order Registered Successfully';
  this.bulkModel = new BulkRegModel();
  this.bulkModel.fullName = this.regForm.controls.fullName.value;
  this.bulkModel.city = this.regForm.controls.city.value;
  this.bulkModel.emailId = this.regForm.controls.emailId.value;
  this.bulkModel.mobileNumber = this.regForm.controls.mobileNumber.value;
  this.bulkModel.products = this.regForm.controls.products.value;
  this.homeService.addBuyInBulk(this.bulkModel).subscribe(data => {
    this.snackbar.open(this.message, this.action, {
      duration: 3000
    });
    console.log(data);
  }, err => {
    console.log(err);
  });
}
}
