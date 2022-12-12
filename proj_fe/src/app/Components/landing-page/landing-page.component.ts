import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarBaseServiceService } from 'src/app/Services/CarBaseService/car-base-service.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public carTypes: string[] = ["Auta małe", "Auta Miejskie", "Coupe", "Kabriolet", "Kombi", "Kompakt", "Minivan", "Sedan", "SUV"];
  public carNames: string[] = [];
  public carModels: string[] = [];

  public isCarNameChanged: boolean = false;

  public advertismentCount: number = 0;

  public carsFilter: CarsLandingPageFilter = new CarsLandingPageFilter();

  constructor(private carBaseService: CarBaseServiceService, private router: Router) {
    this.carBaseService.getCarNames().subscribe(data => this.carNames = data);
  }

  ngOnInit(): void {
    this.carBaseService.getAllCarsCount().subscribe(data => this.advertismentCount = data);
  }

  public checkCarName(): void {
    this.carsFilter.backToDefault();
    if (this.carsFilter.carName !== 'defaultValue') {
      this.isCarNameChanged = true;
      this.getCarModels(this.carsFilter.carName);
      this.carBaseService.getCarCountByName(this.carsFilter.carName).subscribe(data => this.advertismentCount = data);
    } else {
      this.isCarNameChanged = false;
      this.carBaseService.getAllCarsCount().subscribe(data => this.advertismentCount = data);
    }
    if (this.carsFilter.carModel !== 'defaultValue') {
      this.carBaseService.getCarCountByNameAndModel(this.carsFilter.carName, this.carsFilter.carModel)
        .subscribe(data => this.advertismentCount = data);
    }
  }

  public getCarModels(carName: string): void {
    this.carBaseService.getCarsModels(carName).subscribe(data => this.carModels = data);
  }

  public goToCarList(): void {
    console.log('Say sth')
    const isCarNameChanged = this.carsFilter.carName === 'defaultValue';
    const isCarModelChanged = this.carsFilter.carModel === 'defaultValue';
    if (isCarNameChanged && isCarModelChanged) {
      this.router.navigateByUrl('osobowe');
    }
    if (!isCarNameChanged && isCarModelChanged) {
      this.router.navigateByUrl('osobowe/' + this.carsFilter.carName);
    }
    if (!isCarNameChanged && !isCarModelChanged) {
      this.router.navigateByUrl('osobowe/' + this.carsFilter.carName + '/' + this.carsFilter.carModel);
    }

  }

}

class CarsLandingPageFilter {
  public carName: string;
  public carModel: string;

  constructor() {
    this.carName = "defaultValue";
    this.carModel = "defaultValue";
  }

  public backToDefault() {
    this.carModel = "defaultValue";
  }

}
