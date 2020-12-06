import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { FiltrarRamasPipe } from './pipes/filtrar-ramas.pipe';
import { OrderProjectsPipe } from './pipes/order-projects.pipe';
import { SearchComponent } from './pages/search/search.component';
import { FormsModule } from '@angular/forms';
import { MessageService } from './services/message.service';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    FiltrarRamasPipe,
    OrderProjectsPipe,
    SearchComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
