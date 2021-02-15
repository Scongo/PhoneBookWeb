import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PhoneBookComponent } from './components/phone-book/phone-book.component';
import { ListViewModule } from '@syncfusion/ej2-angular-lists';
import {PhoneService} from './services/phone/phone.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PhoneBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ListViewModule,
    HttpClientModule
  ],
  providers: [PhoneService],
  bootstrap: [PhoneBookComponent]
})
export class AppModule { }
