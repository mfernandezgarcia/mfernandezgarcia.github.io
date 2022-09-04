import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { HomeComponent } from './features/home/home.component';
import { WorkExperienceComponent } from './features/work-experience/work-experience.component';
import { AboutMeComponent } from './features/about-me/about-me.component';
import { HabilitiesComponent } from './features/habilities/habilities.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './layouts/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    WorkExperienceComponent,
    AboutMeComponent,
    HabilitiesComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
