package com.example.proj_be.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "cars_base")
public class CarBase {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private String model;
    private int prod_year;
    private int distance;
    private float engine_size;
    private float price;
    private String description;
    private String image_name;
    private int fuel_id;
    private int car_type_id;

}
