import { Component, OnInit } from '@angular/core';
import {HomeService} from '../home.service';
import {FAQ} from './faq.model';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
faqModel: FAQ;
  constructor(public homerService: HomeService) { }

  ngOnInit() {
    this.getFAQ();
  }
 getFAQ() {
   this.homerService.getFAQ().subscribe(data => {
     this.faqModel = data;
     console.log(data);
   }, err => {
     console.log(err);
   });
 }
}
