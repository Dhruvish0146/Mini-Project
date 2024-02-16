package com.becoder.carrentalbackend.service;

import com.becoder.carrentalbackend.model.Booking;
import com.becoder.carrentalbackend.model.Car;
import com.becoder.carrentalbackend.repository.BookingRepository;
import com.becoder.carrentalbackend.repository.CarRepository;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarRentalServiceImpl implements CarRentalService {
    private final CarRepository carRepository;
    private final BookingRepository bookingRepository;

    public CarRentalServiceImpl(CarRepository carRepository, BookingRepository bookingRepository) {
        this.carRepository = carRepository;
        this.bookingRepository = bookingRepository;
    }

    @Override
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    @Override
    public Car getCarById(Long id) {
        return carRepository.findById(id).orElse(null);
    }

    @Override
    public Car addCar(Car car) {
        return carRepository.save(car);
    }

    @Override
    public Car updateCar(Long id, Car car) {
        car.setId(id); // Ensure the correct ID is set for the car
        return carRepository.save(car);
    }

    @Override
    public void deleteCar(Long id) {
        carRepository.deleteById(id);
    }

    @Override
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    @Override
    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id).orElse(null);
    }

    @Override
    public Booking createBooking(Booking booking) {
        // Fetch the Car entity from the database using its ID
        Car car = carRepository.findById(booking.getCar().getId())
                .orElseThrow(() -> new RuntimeException("Car not found"));
        booking.setCar(car);

        return bookingRepository.save(booking);
    }

    @Override
    public Booking updateBooking(Long id, Booking booking) {
        booking.setId(id); // Ensure the correct ID is set for the booking
        return bookingRepository.save(booking);
    }

    @Override
    @Transactional
    public void deleteBooking(Long bookingId) {
        Optional<Booking> optionalBooking = bookingRepository.findById(bookingId);
        if (optionalBooking.isPresent()) {
            Booking booking = optionalBooking.get();
            // Disassociate the booking from the car
            booking.setCar(null); // Assuming your Booking entity has a car field
            bookingRepository.save(booking); // Update the booking to disassociate it from the car
            bookingRepository.deleteById(bookingId); // Now delete the booking
        } else {
            // Handle case where booking is not found
            throw new RuntimeException("Booking not found with id: " + bookingId);
        }
    }
}
