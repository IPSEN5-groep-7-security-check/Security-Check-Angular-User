import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainScanComponent } from './main-scan/main-scan.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadScanComponent } from './load-scan/load-scan.component';
import { ScanResultComponent } from './scan-result/scan-result.component';
import { FaqPageComponent } from "./faq-page/faq-page.component";
import {FooterComponent} from "./footer/footer.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {LoadingPageComponent} from "./loading-page/loading-page.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    MainScanComponent,
    LoadScanComponent,
    LoadScanComponent,
    ScanResultComponent,
    FaqPageComponent,
    FooterComponent,
    LandingPageComponent,
    LoadingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
