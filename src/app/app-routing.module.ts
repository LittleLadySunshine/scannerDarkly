import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ScansComponent } from './scans/scans.component';
import { ScanDetailComponent } from './scan-detail/scan-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  { path: '', redirectTo: '/scans', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'scans', component: ScansComponent },
  { path: 'scans/:id', component: ScansComponent },
  { path: 'profiles', component: ProfileComponent },
  { path: 'profiles/:id', component: ProfileComponent },
  { path: 'report/:id', component: ReportComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
