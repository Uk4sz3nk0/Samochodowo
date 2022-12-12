import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './Components/car-list/car-list.component';
import { PageLayoutComponent } from './Components/page-layout/page-layout.component';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { CarFormComponent } from './Components/car-form/car-form/car-form.component';
import { EditCarFormComponent } from './Components/edit-car-form/edit-car-form.component';

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'osobowe', component: CarListComponent },
      { path: 'osobowe/:name', component: CarListComponent },
      { path: 'osobowe/:name/:model', component: CarListComponent },
      { path: 'addAdvertisment', component: CarFormComponent },
      { path: 'editAdvertisment/:id', component: EditCarFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
