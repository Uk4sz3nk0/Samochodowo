import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CarBase } from 'src/app/Models/CarBase/car-base';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarBaseServiceService {

  private carsURL: string;

  constructor(private http: HttpClient) {
    this.carsURL = 'http://localhost:8080/';
  }

  public getCarNames(): Observable<string[]> {
    return this.http.get<string[]>(this.carsURL);
  }

  public getCarsModels(carName: string): Observable<string[]> {
    return this.http.get<string[]>(this.carsURL + carName);
  }

  public getAllCarsCount(): Observable<number> {
    return this.http.get<number>(this.carsURL + 'count');
  }

  public getCarCountByName(carName: string): Observable<number> {
    return this.http.get<number>(this.carsURL + 'count/' + carName)
  }

  public getCarCountByNameAndModel(carName: string, carModel: string): Observable<number> {
    return this.http.get<number>(this.carsURL + 'count/' + carName + '/' + carModel);
  }

  public findById(id: number): Observable<CarBase> {
    return this.http.get<CarBase>(this.carsURL + 'edit/' + id);
  }

  public findAll(): Observable<CarBase[]> {
    return this.http.get<CarBase[]>(this.carsURL + 'osobowe');
  }

  public getCarsByName(carName: string): Observable<CarBase[]> {
    return this.http.get<CarBase[]>(this.carsURL + 'osobowe/' + carName);
  }

  public getCarsByNameAndModel(carName: string, carModel: string): Observable<CarBase[]> {
    return this.http.get<CarBase[]>(this.carsURL + 'osobowe/' + carName + '/' + carModel);
  }

  public saveCar(carBase: CarBase) {
    return this.http.post<CarBase>(this.carsURL + 'addAdvertisment', carBase);
  }

  public editCar(id: number, carBase: any): Observable<Object> {
    return this.http.put(this.carsURL + 'editAdvertisment/' + id, carBase);
  }

  public deleteCar(id: any) {
    return this.http.delete<any>(this.carsURL + 'osobowe/' + id);
  }
}
