import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SuperCategory } from './category.model';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-category-content',
  templateUrl: './category-content.component.html',
  styleUrls: ['./category-content.component.css']
})
export class CategoryContentComponent implements OnInit {
  categoryModel: SuperCategory;
  categoryType;
constructor(private fb: FormBuilder, private router: Router, private homeService: HomeService) { }

  ngOnInit() {
    this.getCategoryDetails();
  }
  getCategoryDetails() {
    this.homeService.getSuperCategory().subscribe(data => {
      this.categoryModel = data;
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
  viewCategoryProduct(id) {
    this.categoryType = 'super';
    this.router.navigate([ '/product/type', this.categoryType, 'productlist', id]);
  }
}

