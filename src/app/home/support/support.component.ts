import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Support } from './support.model';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {
  supportModel: Support;
  constructor(private fb: FormBuilder, private router: Router, private homeService: HomeService) { }
    ngOnInit() {
      this.getSupportUs();
    }
    getSupportUs() {
      this.homeService.getSupportUs().subscribe(data => {
        this.supportModel = data;
        console.log(data, 'support us');
      }, err => {
        console.log(err);
      });
    }

}
