import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'saif-buyer';
  routerData: any;
  constructor(
  private route: Router) {
     this.routerData = this.route.config;
     this.route.events.subscribe(event => {
       if (event instanceof NavigationEnd) {
         (<any>window).ga('set', 'page', event.urlAfterRedirects);
         (<any> window).ga('send', 'pageview');
       }
     });
   }
}
