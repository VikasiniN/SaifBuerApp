import { Component, OnInit, createPlatformFactory } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { mobileNumber } from './../../shared/validation';

@Component({
  selector: 'app-buy-in-bulk',
  templateUrl: './buy-in-bulk.component.html',
  styleUrls: ['./buy-in-bulk.component.css']
})
export class BuyInBulkComponent implements OnInit {
  regForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router,) { }

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
}
