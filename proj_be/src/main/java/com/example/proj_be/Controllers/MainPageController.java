package com.example.proj_be.Controllers;

import com.example.proj_be.Models.CarBase;
import com.example.proj_be.Repositories.CarRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class MainPageController {

    private final CarRepository carRepository;

    @GetMapping("/")
    public List<String> getCarsNames() {
        return carRepository.getCarsNames();
    }

    @GetMapping("/{carName}")
    public List<String> getCarsModels(@PathVariable String carName) {
        return carRepository.getCarsModels(carName);
    }

    @GetMapping("/count")
    public Long getCarsCount() {
        return carRepository.getAllCarsCount();
    }

    @GetMapping("/count/{carName}")
    public Long getCarCountByName(@PathVariable String carName) {
        return carRepository.getCarCountByName(carName);
    }

    @GetMapping("/count/{carName}/{carModel}")
    public Long getCarCountByNameAndModel(@PathVariable String carName, @PathVariable String carModel) {
        return this.carRepository.getCarCountByNameAndModel(carName, carModel);
    }

    @GetMapping("/edit/{id}")
    public CarBase getById(@PathVariable Long id) {
        return this.carRepository.getCarById(id);
    }

    @GetMapping("/osobowe")
    public List<CarBase> getCars() {
        return carRepository.findAll();
    }

    @GetMapping("/osobowe/{carName}")
    public List<CarBase> getCarsByName(@PathVariable String carName) {
        return carRepository.findAllByName(carName);
    }

    @GetMapping("/osobowe/{carName}/{carModel}")
    public List<CarBase> getCarsByNameAndModel(@PathVariable String carName, @PathVariable String carModel) {
        return carRepository.findAllByNameAndModel(carName, carModel);
    }

    @PostMapping("/addAdvertisment")
    public void addCar(@RequestBody CarBase carBase) {
        carRepository.save(carBase);
    }

    @PutMapping("/editAdvertisment/{id}")
    public void updateBaseCar(@PathVariable Long id, @RequestBody CarBase newCarBase) {
        System.out.println(newCarBase.getName());
        try {
            CarBase carBase = carRepository.getCarById(id);
            carBase.setId(newCarBase.getId());
            carBase.setName(newCarBase.getName());
            carBase.setModel(newCarBase.getModel());
            carBase.setProd_year(newCarBase.getProd_year());
            carBase.setDistance(newCarBase.getDistance());
            carBase.setEngine_size(newCarBase.getEngine_size());
            carBase.setPrice(newCarBase.getPrice());
            carBase.setDescription(newCarBase.getDescription());
            carBase.setImage_name(newCarBase.getImage_name());
            carBase.setFuel_id(newCarBase.getFuel_id());
            carBase.setCar_type_id(newCarBase.getCar_type_id());
            carRepository.save(carBase);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @DeleteMapping("/osobowe/{id}")
    public void deleteCar(@PathVariable("id") long id) {
        this.carRepository.deleteById(id);
    }
}
