import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ads } from './ads.model';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
  adsModel: Ads;
  constructor(private fb: FormBuilder, private router: Router, private homeService: HomeService) { }
    ngOnInit() {
      this.getAds();
    }
getAds() {
    this.homeService.getAds().subscribe(data => {
      this.adsModel = data;
      console.log(data, 'ads');
    }, err => {
      console.log(err);
    });
}
}
