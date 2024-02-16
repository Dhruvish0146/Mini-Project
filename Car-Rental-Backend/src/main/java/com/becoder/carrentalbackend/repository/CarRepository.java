package com.becoder.carrentalbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.becoder.carrentalbackend.model.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
    // You can add custom query methods here if needed
}

