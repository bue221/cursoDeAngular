import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighligthDirective } from './directivas/highligth.directive';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { BannerComponent } from './common/banner/banner.component';
import { Error404Component } from './pages/error404/error404.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ExponentialPipe,
    HighligthDirective,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    Error404Component,
    DetailProductComponent,
    LayoutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
