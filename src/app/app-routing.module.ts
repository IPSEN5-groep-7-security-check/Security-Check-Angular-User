import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScanComponent } from './main-scan/main-scan.component';
import { LoadScanComponent } from './load-scan/load-scan.component';
import { ScanResultComponent } from './scan-result/scan-result.component';
import { FaqPageComponent } from './faq-page/faq-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: { message: 'Page not found :(  !' },
  },
  { path: 'home', component: MainScanComponent },
  { path: 'loading...', component: LoadScanComponent },
  { path: 'scan-result', component: ScanResultComponent },
  { path: 'faq', component: FaqPageComponent },
  { path: '**', redirectTo: 'not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
