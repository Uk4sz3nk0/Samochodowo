import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarListComponent } from './Components/car-list/car-list.component';
import { FooterComponent } from './Components/footer/footer/footer.component';
import { FiltersComponent } from './Components/filters/filters/filters.component';
import { CarFormComponent } from './Components/car-form/car-form/car-form.component';
import { HeaderComponent } from './Components/header/header/header.component';
import { PageLayoutComponent } from './Components/page-layout/page-layout.component';
import { PageContentComponent } from './Components/page-content/page-content.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { EditCarFormComponent } from './Components/edit-car-form/edit-car-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    FooterComponent,
    FiltersComponent,
    CarFormComponent,
    HeaderComponent,
    PageLayoutComponent,
    PageContentComponent,
    LandingPageComponent,
    EditCarFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
