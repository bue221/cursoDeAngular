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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
