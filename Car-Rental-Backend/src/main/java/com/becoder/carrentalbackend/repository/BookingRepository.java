package com.becoder.carrentalbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.becoder.carrentalbackend.model.Booking;
@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {
    // You can add custom query methods here if needed
}
