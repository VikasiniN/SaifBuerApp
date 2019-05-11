import { Component, OnInit } from '@angular/core';
import {TermsUse} from './termsuse.model';
import {HomeService} from '../home.service';
@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.css']
})
export class TermsAndConditionsComponent implements OnInit {
termsModel: TermsUse;
  constructor(public homeService: HomeService) { }

  ngOnInit() {
    this.getTerms();
  }
getTerms() {
  this.homeService.getTermsAndUSe().subscribe(data => {
    this.termsModel = data;
  }, err => {
    console.log(err);
  });
}
}
