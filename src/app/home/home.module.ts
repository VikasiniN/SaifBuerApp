import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { CategoryContentComponent } from './category-content/category-content.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { Promotion1Component } from './promotion1/promotion1.component';
import { Promotion2Component } from './promotion2/promotion2.component';
import { ReviewComponent } from './review/review.component';
import { StripComponent } from './strip/strip.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import {HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AdsComponent } from './ads/ads.component';
import { SupportComponent } from './support/support.component';
import { BuyInBulkComponent } from './buy-in-bulk/buy-in-bulk.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [BannerComponent, CategoryContentComponent, FooterComponent, ProductComponent, Promotion1Component, Promotion2Component,
     ReviewComponent, StripComponent, SubscribeComponent, HomeComponent, AdsComponent, SupportComponent, BuyInBulkComponent, ContactUsComponent, PrivacyPolicyComponent, TermsAndConditionsComponent, FaqComponent],
  imports: [
    CommonModule,
    HomeRoutingModule 
  ]
})
export class HomeModule { }
