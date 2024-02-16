package com.becoder.carrentalbackend.service;

import com.becoder.carrentalbackend.model.Booking;
import com.becoder.carrentalbackend.model.Car;

import java.util.List;

public interface CarRentalService {

    List<Car> getAllCars();
    Car getCarById(Long id);
    Car addCar(Car car);
    Car updateCar(Long id, Car car);
    void deleteCar(Long id);

    List<Booking> getAllBookings();
    Booking getBookingById(Long id);
    Booking createBooking(Booking booking);
    Booking updateBooking(Long id, Booking booking);
    void deleteBooking(Long id);
}
