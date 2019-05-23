import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, fromEventPattern } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AppSetting } from '../config/appSetting';
import {Banner} from './banner/banner.model';
import {SuperCategory} from './category-content/category.model';
import {Footer} from './footer/footer.model';
import {Promotion} from './promotion1/promotion.model';
import {PrivacyPolicy} from './privacy-policy/privacy-policy.model';
import {FAQ} from './faq/faq.model';
import {TermsUse} from './terms-and-conditions/termsuse.model';
import {ContactUs} from './contact-us/contactus.model';
import {BulkRegModel} from './buy-in-bulk/bulk.model';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  serviceUrl: string = AppSetting.serviceUrl;
  constructor(private httpClient: HttpClient) { }

  // get banners
  getAllBanner(): Observable<any> {
    const categoryUrl = 'banners';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Banner>(url);
  }
  getSuperCategory(): Observable<any> {
    const categoryUrl = 'categoryDetails';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<SuperCategory>(url);
  }

  // get footer
  getFooterDetails(): Observable<any> {
    const categoryUrl = 'footerDetails';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Footer>(url);
  }

  // get ads

  getAds(): Observable<any> {
    const categoryUrl = 'ads';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Footer>(url);
  }

  // promotions

  getPromotions(): Observable<any> {
    const categoryUrl = 'promotions';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Promotion>(url);
  }

  // support us

  getSupportUs(): Observable<any> {
    const categoryUrl = 'supportDetails';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Footer>(url);
  }

  // contact us
  getContactUs(): Observable<any> {
    const categoryUrl = 'contactDetails';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<Footer>(url);
  }

  // get privacy policy
  getPrivacyPolicy(): Observable<any> {
    const categoryUrl = 'privacypolicy';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<PrivacyPolicy>(url);
  }

  // get faq
  getFAQ(): Observable<any> {
    const categoryUrl = 'faq';
    const url: string = this.serviceUrl + categoryUrl;
    return this.httpClient.get<FAQ>(url);
  }

    // get terms and use
    getTermsAndUSe(): Observable<any> {
      const categoryUrl = 'termsanduse';
      const url: string = this.serviceUrl + categoryUrl;
      return this.httpClient.get<TermsUse>(url);
    }

    // contact

    addCustomerContact(prod) {
      const categoryUrl = 'contactus';
      const url: string = this.serviceUrl + categoryUrl;
      return this.httpClient.post<ContactUs>(url, prod);
    }

    // buy in bulk

    addBuyInBulk(prod) {
      const categoryUrl = 'bulkregsitration';
      const url: string = this.serviceUrl + categoryUrl;
      return this.httpClient.post<BulkRegModel>(url, prod);
    }
}
