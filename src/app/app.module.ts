import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ResidencesComponent } from './residences/residences.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShowappartComponent } from './showappart/showappart.component';
import { CardresidenceComponent } from './cardresidence/cardresidence.component';
import { FormappartComponent } from './formappart/formappart.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResidencesComponent,
    CardresidenceComponent,
    FooterComponent,
    PageNotFoundComponent,
    ShowappartComponent,
    FormappartComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
