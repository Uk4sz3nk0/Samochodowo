import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarBase } from 'src/app/Models/CarBase/car-base';
import { CarBaseServiceService } from 'src/app/Services/CarBaseService/car-base-service.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  carBase: CarBase;

  constructor(private router: Router, private carBaseService: CarBaseServiceService) {
        this.carBase = new CarBase(1000, "","",0,0,0,0,"","",0,0);
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.carBase.image_name = 'stockImage';
    this.carBaseService.saveCar(this.carBase).subscribe(result => this.goToCarList())
  }

  goToCarList(): void {
    this.router.navigate(['osobowe']);
  }

}
