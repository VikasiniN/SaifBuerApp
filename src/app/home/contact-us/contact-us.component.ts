import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactUs } from './contactus.model';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUsModel: ContactUs;
  constructor(private fb: FormBuilder, private router: Router, private homeService: HomeService) { }
    ngOnInit() {
      this.getSupportUs();
    }
    getSupportUs() {
      this.homeService.getContactUs().subscribe(data => {
        this.contactUsModel = data;
        console.log(data, 'support us');
      }, err => {
        console.log(err);
      });
    }


}
