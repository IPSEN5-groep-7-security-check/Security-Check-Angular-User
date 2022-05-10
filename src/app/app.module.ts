import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainScanComponent } from './main-scan/main-scan.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadScanComponent } from './load-scan/load-scan.component';
import { ScanResultComponent } from './scan-result/scan-result.component';
import {ReactiveFormsModule} from "@angular/forms";
import {FaqPageComponent} from "./faq-page/faq-page.component";

@NgModule({
  declarations: [
    AppComponent,
    MainScanComponent,
    LoadScanComponent,
    LoadScanComponent,
    ScanResultComponent,
    FaqPageComponent
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
