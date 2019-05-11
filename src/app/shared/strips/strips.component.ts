import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strips',
  templateUrl: './strips.component.html',
  styleUrls: ['./strips.component.css']
})
export class StripsComponent implements OnInit {
stripEnable: string;
displayClass = 'noneClass';
  constructor() { }

  ngOnInit() {

  }

  test() {
this.stripEnable = this.displayClass;
  }


}
