import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainScanComponent } from './main-scan/main-scan.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadScanComponent } from './load-scan/load-scan.component';
import { ScanResultComponent } from './scan-result/scan-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainScanComponent,
    LoadScanComponent,
    ScanResultComponent,
    FaqPageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
