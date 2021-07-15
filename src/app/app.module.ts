import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormLoginComponent } from './form-login/form-login.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

//import do angular material
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import{ MatToolbarModule} from '@angular/material/toolbar';


import { FooterComponent } from './SharedComponents/footer/footer.component';
import { HeaderComponent } from './SharedComponents/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    FormLoginComponent,
    NoticiasComponent,
    NotFoundPageComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
