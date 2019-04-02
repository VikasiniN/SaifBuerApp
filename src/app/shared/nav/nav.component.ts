import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
import {Footer} from '../footer/footer.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  navbarShow = false;

  dropdownShow = false;
  mainCategory;
  selectedDropDown: string;
  selected: any;

  footerDetails: Footer;
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.logo();

  }
logo() {
  this.sharedService.getFooterDetails().subscribe(data => {
    this.footerDetails = data;
  }, error => {
    console.log(error);
  });
}
  toggleNavbar() {
    this.navbarShow = !this.navbarShow;
  }
  toggleDropdownLeave() {
    this.selectedDropDown = '';
    this.selected = '';
  }
  toggleLeave() {
    this.dropdownShow = !this.dropdownShow;
  }
}
