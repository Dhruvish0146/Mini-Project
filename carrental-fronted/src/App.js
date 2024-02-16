import React from "react"
import CarList from "./components/CarList";
import AddCar from "./components/AddCar"
import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import UpdateCar from "./components/UpdateCar";
// import Home from "./components/CarList";
import Home from "./components/Home";
import BookingCarList from "./components/BookingCarList";
import { BookingCar } from "./components/BookingCar";


const App=()=>{
  return(
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/carList" element={<CarList/>}/>
        <Route path="/bookingCarList" element={<BookingCarList/>}/>
        <Route path="/addCar" element={<AddCar/>}/>
        <Route path="/bookingCar" element={<BookingCar/>}/>
        <Route path="/updateCar/:id" element={<UpdateCar/>}/>
      </Routes>
    </>
  );
}

export default App;