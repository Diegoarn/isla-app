import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmailService } from './email.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BookCardComponent } from './book-card/book-card.component';
import { FooterComponent } from './footer/footer.component';
import { OrderComponent } from './main/order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OtroComponent } from './otro/otro.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BookCardComponent,
    FooterComponent,
    OrderComponent,
    OtroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [EmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
