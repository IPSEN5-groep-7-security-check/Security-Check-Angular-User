import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MainScanComponent } from './main-scan/main-scan.component';
import { AppRoutingModule } from './app-routing.module';
import { LoadScanComponent } from './load-scan/load-scan.component';
import { ScanResultComponent } from './scan-result/scan-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DarkModeToggleComponent } from './app-dark-mode-toggle/app-dark-mode-toggle.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ResultModalComponent } from './scan-result/result-modal/result-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    MainScanComponent,
    LoadScanComponent,
    ScanResultComponent,
    FaqPageComponent,
    NavbarComponent,
    DarkModeToggleComponent,
    FooterComponent,
    ErrorPageComponent,
    ResultModalComponent,
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
