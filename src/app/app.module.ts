import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routes.module';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { GlobalService } from './service/global.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductModificationComponent } from './product-modification/product-modification.component'
import { RegisterComponent } from './register/register.component';
import { backendServiceProvider, JwtInterceptor, ErrorInterceptor } from './helper';
import { AlertComponent } from './component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { CustomChartComponent } from './custom-chart/custom-chart.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    ProductListComponent,
    HomeComponent,
    HeaderComponent,
    CarouselComponent,
    RegisterComponent,
    ProductModificationComponent,
    AlertComponent,
    ChartComponent,
    CustomChartComponent,
    AboutComponent


  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, ChartsModule, FormsModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, Ng2SearchPipeModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },


    // provider used to create fake backend
    backendServiceProvider, GlobalService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
