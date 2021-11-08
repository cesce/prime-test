import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsModule } from './persons/persons.module';
import { PersonsDataService } from './persons/persons.data.service';

import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    PersonsModule,
    HttpClientInMemoryWebApiModule.forRoot(PersonsDataService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
