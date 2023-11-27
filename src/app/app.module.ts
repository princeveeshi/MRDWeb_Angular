import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { HeaderComponent } from './component/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MobileAppDevelopmentComponent } from './TabService/mobile-app-development/mobile-app-development.component';
import { WebDevelopmentComponent } from './TabService/web-development/web-development.component';
import { UIUXDesignComponent } from './TabService/ui-uxdesign/ui-uxdesign.component';
import { QAComponent } from './TabService/qa/qa.component';
import { DevOpsComponent } from './TabService/dev-ops/dev-ops.component';
import { SAPERPComponent } from './TabService/sap-erp/sap-erp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    HeaderComponent,
    MobileAppDevelopmentComponent,
    WebDevelopmentComponent,
    UIUXDesignComponent,
    QAComponent,
    DevOpsComponent,
    SAPERPComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
