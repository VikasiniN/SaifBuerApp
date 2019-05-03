import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Promotion } from '../promotion1/promotion.model';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-promotion2',
  templateUrl: './promotion2.component.html',
  styleUrls: ['./promotion2.component.css']
})
export class Promotion2Component implements OnInit {
  promotionsModel: Promotion;
  constructor(private fb: FormBuilder, private router: Router, private homeService: HomeService) { }
    ngOnInit() {
      this.getPromotions();
    }
    getPromotions() {
      this.homeService.getPromotions().subscribe(data => {
        this.promotionsModel = data;
        console.log(data, 'promotions');
      }, err => {
        console.log(err);
      });
    }
    detailView( val) {
  console.log('id', val);
   }}
