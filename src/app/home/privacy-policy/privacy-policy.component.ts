import { Component, OnInit } from '@angular/core';
import {HomeService} from '../home.service';
import {PrivacyPolicy} from './privacy-policy.model';
@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
privayModel: PrivacyPolicy;

  constructor(public homerService: HomeService) { }

  ngOnInit() {
    this.getPrivacyPolicy();
  }
getPrivacyPolicy() {
this.homerService.getPrivacyPolicy().subscribe(data => {
  this.privayModel = data;
  console.log(data);
}, err => {
  console.log(err);
});
}
}
