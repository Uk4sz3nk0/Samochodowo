package com.example.proj_be.Repositories;

import com.example.proj_be.Models.CarBase;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CarRepository extends JpaRepository<CarBase, Long> {


    @Query(value = "SELECT carBase FROM CarBase carBase WHERE carBase.id=?1")
    CarBase getCarById(Long id);

    @Query(value = "SELECT DISTINCT carBase.name FROM CarBase carBase")
    List<String> getCarsNames();

    @Query(value = "SELECT DISTINCT carBase.model FROM CarBase carBase WHERE carBase.name = ?1")
    List<String> getCarsModels(String carName);

    @Query(value = "SELECT COUNT(carBase) FROM CarBase carBase")
    Long getAllCarsCount();

    @Query(value = "SELECT COUNT(carBase) FROM CarBase carBase WHERE carBase.name=?1")
    Long getCarCountByName(String carName);

    @Query(value = "SELECT COUNT(carBase) FROM CarBase carBase WHERE carBase.name=?1 AND carBase.model=?2")
    Long getCarCountByNameAndModel(String carName, String carModel);
    @Query(value = "SELECT carBase FROM CarBase carBase WHERE carBase.name=?1")
    List<CarBase> findAllByName(String carName);

    @Query(value = "SELECT carBase FROM CarBase carBase WHERE carBase.name=?1 AND carBase.model=?2")
    List<CarBase> findAllByNameAndModel(String carName, String carModel);

}
