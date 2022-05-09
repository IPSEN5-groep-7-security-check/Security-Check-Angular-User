import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainScanComponent} from "./main-scan/main-scan.component";
import {LoadScanComponent} from "./load-scan/load-scan.component";
import {ScanResultComponent} from "./scan-result/scan-result.component";
import {FaqPageComponent} from "./faq-page/faq-page.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: MainScanComponent},
  {path:'loading...', component: LoadScanComponent},
  {path: 'scan-results', component: ScanResultComponent},
  {path: 'faq', component: FaqPageComponent},
  {path: '**', redirectTo:'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
