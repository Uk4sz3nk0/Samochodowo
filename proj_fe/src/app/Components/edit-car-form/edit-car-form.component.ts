import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarBase } from 'src/app/Models/CarBase/car-base';
import { CarBaseServiceService } from 'src/app/Services/CarBaseService/car-base-service.service';

@Component({
  selector: 'app-edit-car-form',
  templateUrl: './edit-car-form.component.html',
  styleUrls: ['./edit-car-form.component.scss']
})
export class EditCarFormComponent implements OnInit {

  carID: any;
  carBase: CarBase;

  constructor(private router: Router, private carBaseService: CarBaseServiceService, private activatedRoute: ActivatedRoute) {
    this.carBase = new CarBase(1000, "","",0,0,0,0,"","",0,0);
  }

  ngOnInit(): void {
    this.carID = this.activatedRoute.snapshot.paramMap.get('id');
    this.carBaseService.findById(parseInt(this.carID)).subscribe(data => this.carBase = data);
  }

  onSubmit(): void {
    this.carBaseService.editCar(this.carID, this.carBase).subscribe(data => this.router.navigate(['osobowe']));
  }

}
