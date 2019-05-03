import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BuyInBulkComponent } from './buy-in-bulk/buy-in-bulk.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { SupportComponent } from './support/support.component';
import { FaqComponent } from './faq/faq.component';


const routes: Routes = [
  {
    path: 'banner', component: BannerComponent,
  },
  {
    path: 'welcome', component: HomeComponent,
  },
  {
    path: 'contact', component: ContactUsComponent,
  },
  {
    path: 'buyinbulk', component: BuyInBulkComponent,
  },
  {
    path: 'privacypolicy', component: PrivacyPolicyComponent,
  },
  {
    path: 'termsandconditions', component: TermsAndConditionsComponent,
  },
  {
    path: 'support', component: SupportComponent,
  },
  {
    path: 'faq', component: FaqComponent,
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
