import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AddSeoComponent } from './seo/add-seo/add-seo.component';
import { SeoService } from './seo/seo.service';
import { HomeRoutingModule } from './home/home-routing.module';
import { SharedRoutingModule } from './shared/shared-routing.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatCardModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {FooterComponent} from './shared/footer/footer.component';
import {NavComponent} from './shared/nav/nav.component';
@NgModule({
  declarations: [
    AppComponent,
    AddSeoComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'seo'}),
    AppRoutingModule,
    HttpClientModule,
    SharedRoutingModule,
    NoopAnimationsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [SeoService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
