import React, { useEffect, useState } from "react";
import carrentalService from "../service/carrental.service";
import { Link } from "react-router-dom";

const BookingCarList=()=>{
    const [bookingCarList,setBookingCarList]=useState([]);
    const [msg,setMsg]=useState([]);
    useEffect(()=>{
        init();
    },[])

    const init=()=>{

    }

    const deleteBooking=()=>{

    }

    return(
        <>
            <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
            <div></div>
              <div className="card-header fs-3 text-center">
                Booking Car List
                {msg && <p className="fs-4 text-center text-success">{msg}</p>}
                <div>
                <Link to={"../bookingCar"}
                className="btn btn-sm btn-success ms-1">AddBooking</Link>
              </div>
              </div>
              
              
                

              <div className="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Serial No</th>
                      <th scope="col">Car Name</th>
                      <th scope="col">Model</th>
                      <th scope="col">Year</th>
                      <th scope="col">Available</th>
                      <th scope="col">Car No.</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookingCarList.map((car, num) => (
                      <tr>
                        <td>{num + 1}</td>
                        <td>{car.carName}</td>
                        <td>{car.model}</td>
                        <td>{car.year}</td>
                        <td>{car.available ? "Available" : "Not Avilable"}</td>
                        <td>{car.carNo}</td>
                        <td>
                          <Link
                            to={"updateProduct/" + car.id}
                            className="btn btn-sm btn-primary"
                          >
                            Update
                          </Link>
                          <button
                            onClick={() => deleteBooking(car.id)}
                            className="btn btn-sm btn-danger ms-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}

export default BookingCarList;