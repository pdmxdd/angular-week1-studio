import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { AstronautsComponent } from './astronauts/astronauts.component';
import { MissionsComponent } from './missions/missions.component';
import { CountriesComponent } from './countries/countries.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, AstronautsComponent, MissionsComponent, CountriesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
