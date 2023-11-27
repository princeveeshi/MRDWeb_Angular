import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './component/contact/contact.component'; // Import the ContactComponent
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import {MobileAppDevelopmentComponent} from './TabService/mobile-app-development/mobile-app-development.component';
import {WebDevelopmentComponent} from './TabService/web-development/web-development.component';
import {UIUXDesignComponent} from './TabService/ui-uxdesign/ui-uxdesign.component';
import {QAComponent} from './TabService/qa/qa.component';
import { DevOpsComponent} from './TabService/dev-ops/dev-ops.component';
import {SAPERPComponent} from './TabService/sap-erp/sap-erp.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'service',
    children: [
      { path: 'mobile-app-development', component: MobileAppDevelopmentComponent },
      { path: 'web-development', component: WebDevelopmentComponent },
      { path: 'ui-uxdesign', component: UIUXDesignComponent },
      { path: 'qa', component: QAComponent },
      { path: 'devops', component: DevOpsComponent },
      { path: 'saperp', component: SAPERPComponent },
    ],
  },
  { path: '**', redirectTo: '' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
