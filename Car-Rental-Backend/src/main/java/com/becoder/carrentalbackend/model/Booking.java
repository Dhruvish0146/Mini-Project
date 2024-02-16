package com.becoder.carrentalbackend.model;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.Date;

@Entity
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "car_id")
    private Car car;


    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private Date startDate;


    @DateTimeFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private Date endDate;
    private String customerName;
    private String customerEmail;

    private String customerMobileNumber;

    // Constructors
    public Booking() {}

    public String getCustomerMobileNumber() {
        return customerMobileNumber;
    }

    public void setCustomerMobileNumber(String customerMobileNumber) {
        this.customerMobileNumber = customerMobileNumber;
    }

    public Booking(Car car, Date startDate, Date endDate, String customerName, String customerEmail) {
        this.car = car;
        this.startDate = startDate;
        this.endDate = endDate;
        this.customerName = customerName;
        this.customerEmail = customerEmail;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerEmail() {
        return customerEmail;
    }

    public void setCustomerEmail(String customerEmail) {
        this.customerEmail = customerEmail;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", car=" + car +
                ", startDate=" + startDate +
                ", endDate=" + endDate +
                ", customerName='" + customerName + '\'' +
                ", customerEmail='" + customerEmail + '\'' +
                ", customerMobileNumber='" + customerMobileNumber + '\'' +
                '}';
    }
}

