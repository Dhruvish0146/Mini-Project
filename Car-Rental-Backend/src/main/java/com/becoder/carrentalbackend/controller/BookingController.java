package com.becoder.carrentalbackend.controller;

import com.becoder.carrentalbackend.service.CarRentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.becoder.carrentalbackend.model.Booking;

import java.util.List;
@CrossOrigin(origins = "http://http://localhost:3000")
@RestController
@RequestMapping("/api/bookings")
public class BookingController {
    private final
    CarRentalService carRentalService;

    @Autowired
    public BookingController(CarRentalService carRentalService) {
        this.carRentalService = carRentalService;
    }

    @GetMapping
    public ResponseEntity<List<Booking>> getAllBookings() {
        List<Booking> bookings = carRentalService.getAllBookings();
        return ResponseEntity.ok(bookings);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long id) {
        Booking booking = carRentalService.getBookingById(id);
        if (booking != null) {
            return ResponseEntity.ok(booking);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking) {
        Booking newBooking = carRentalService.createBooking(booking);
        return ResponseEntity.status(HttpStatus.CREATED).body(newBooking);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable Long id, @RequestBody Booking booking) {
        Booking updatedBooking = carRentalService.updateBooking(id, booking);
        return ResponseEntity.ok(updatedBooking);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBooking(@PathVariable Long id) {
        carRentalService.deleteBooking(id);
        return ResponseEntity.noContent().build();
    }
}

