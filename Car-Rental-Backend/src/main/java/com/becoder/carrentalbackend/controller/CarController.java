package com.becoder.carrentalbackend.controller;

import com.becoder.carrentalbackend.model.Car;
import com.becoder.carrentalbackend.service.CarRentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/cars")
public class CarController {
    private final CarRentalService carRentalService;

    @Autowired
    public CarController(CarRentalService carRentalService) {
        this.carRentalService = carRentalService;
    }

    @GetMapping
    public ResponseEntity<List<Car>> getAllCars() {
        List<Car> cars = carRentalService.getAllCars();
        return ResponseEntity.ok(cars);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Car> getCarById(@PathVariable Long id) {
        Car car = carRentalService.getCarById(id);
        if (car != null) {
            return ResponseEntity.ok(car);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Car> addCar(@RequestBody Car car) {
        Car newCar = carRentalService.addCar(car);
        return ResponseEntity.status(HttpStatus.CREATED).body(newCar);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Car> updateCar(@PathVariable Long id, @RequestBody Car car) {
        Car updatedCar = carRentalService.updateCar(id, car);
        return ResponseEntity.ok(updatedCar);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCar(@PathVariable Long id) {
        carRentalService.deleteCar(id);
        String Success="Car is Succefully Deleted ";
        return ResponseEntity.ok(Success);
    }
}

