import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailsComponent } from './details/details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ChartsModule } from 'ng2-charts';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { GetCollegesService } from './get-colleges.service';
import { GetSimilarCollegesService } from './get-similar-colleges.service';
import { SetupDbService } from './setup-db.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    ChartsModule,
    HttpClientModule,
  ],
  providers: [
    GetCollegesService,
    GetSimilarCollegesService,
    SetupDbService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
