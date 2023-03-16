import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { 
  FormsModule,
  ReactiveFormsModule, } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TypeProduitModule} from './type-produit/type-produit.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatExpansionModule, MatProgressSpinnerModule, MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  
} from '@angular/material';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {
  AtomSpinnerModule,
  FlowerSpinnerModule,
  FulfillingBouncingCircleSpinnerModule, RadarSpinnerModule,
  TrinityRingsSpinnerModule
} from 'angular-epic-spinners';
import {InjectTokenInterceptor} from './interceptors/inject-token-interceptor';
import {LoaderService} from './service/loader.service';
import { LoginModule } from './login/login.module';
import { CampagneListComponent } from './components/campagne-list/campagne-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    CampagneListComponent,
  ],
  imports: [
    LoginModule,
    TypeProduitModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    BrowserModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatOptionModule,
    MatSelectModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    // FlowerSpinnerModule,
    // FulfillingBouncingCircleSpinnerModule
    // TrinityRingsSpinnerModule,
    RadarSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InjectTokenInterceptor,
      multi: true
    },
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
