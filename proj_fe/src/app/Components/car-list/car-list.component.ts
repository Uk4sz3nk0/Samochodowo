import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarBase } from 'src/app/Models/CarBase/car-base';
import { CarBaseServiceService } from 'src/app/Services/CarBaseService/car-base-service.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
  providers: [CarBaseServiceService]
})
export class CarListComponent implements OnInit {

carName: any;
carModel: any;
cars: CarBase[];

  constructor(private carService: CarBaseServiceService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.cars = [];
    this.carName = this.activatedRoute.snapshot.paramMap.get('name');
    this.carModel = this.activatedRoute.snapshot.paramMap.get('model');
   }

  ngOnInit(): void {
    const isCarName = this.carName !== null;
    const isCarModel = this.carModel !== null;
    if (!isCarName && !isCarModel) {
      this.carService.findAll().subscribe(data => {
        this.cars = data;
        console.log(data);
      })
    }
    if (isCarName && !isCarModel) {
      this.carService.getCarsByName(this.carName).subscribe(data => {
        this.cars = data;
        console.log(data);
      })
    }
    if (isCarName && isCarModel) {
      this.carService.getCarsByNameAndModel(this.carName, this.carModel).subscribe(data => {
        this.cars = data;
        console.log(data);
      })
    }
  }

  public getFuelName(fuel_id: number): string {
    switch (fuel_id) {
      case 1:
        return "Benzyna";
      default:
        return "Inny/Nie rozpoznano paliwa"
    }
  }

  deleteCar(id: any) {
    this.carService.deleteCar(id).subscribe(response => window.location.reload());
  }

  goToEdit(id: any) {
    this.router.navigateByUrl('editAdvertisment/' + id);
  }

}
