 export class CarBase {

  public id: number;
  public name: string;
  public model: string;
  public prod_year: number;
  public distance: number;
  public engine_size: number;
  public price: number;
  public description: string;
  public image_name: string;
  public fuel_id: number;
  public car_type_id: number;


  public constructor(id: number, name: string, model: string, prod_year: number, distance: number, engine_size: number,
    price: number, description: string, image_name: string, fuel_id: number, car_type_id: number) {
    this.id = id;
    this.name = name;
    this.model = model;
    this.prod_year = prod_year;
    this.distance = distance;
    this.engine_size = engine_size;
    this.price = price;
    this.description = description;
    this.image_name = name.toLowerCase() + '_' + model.toLocaleLowerCase() + '_' + id + '_1';
    this.fuel_id = fuel_id;
    this.car_type_id = car_type_id;
  }

}
