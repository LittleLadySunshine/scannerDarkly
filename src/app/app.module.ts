import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { ScansComponent } from './scans/scans.component';
import { ScanDetailComponent } from './scan-detail/scan-detail.component';
import { ReportComponent } from './report/report.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileDetailComponent,
    ProfileComponent,
    ScansComponent,
    ScanDetailComponent,
    ReportComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
