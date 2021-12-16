import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UrlListComponent } from './components/url-list/url-list.component';
import { ShortenUrlComponent } from './components/shorten-url/shorten-url.component';

import { ShortenUrlService } from 'src/app/dashboard/services/shorten-url.service';

@NgModule({
  declarations: [HomeComponent, UrlListComponent, ShortenUrlComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    DashboardRoutingModule
  ],
  providers: [
    ShortenUrlService
  ]
})
export class DashboardModule { }
