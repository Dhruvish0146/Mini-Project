import React, { useState } from "react";
import carrentalService from "../service/carrental.service";
import { Navigate, useNavigate } from "react-router-dom";

const AddCar = () => {
  const [car, setCar] = useState({});
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setCar({ ...car, [e.target.name]: value });
  };

  const CarRegsiter = (e) => {
    e.preventDefault();
    carrentalService
      .addCar(car)
      .then((res) => {
        console.log("Car Added Successfully");
        setMsg("Car Added Successfully");
        setCar({});
        navigate("/carList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
  <div className="bg-purple-100 min-h-screen flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg shadow-md w-full md:max-w-3xl">
      <h1 className="text-3xl font-semibold text-center mb-8 bg-purple-500 text-white py-2 rounded-lg font-sans">
        Add Car
      </h1>
      {msg && <p className="text-lg text-center text-green-500">{msg}</p>}
      <form onSubmit={(e) => CarRegsiter(e)} className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <span className="text-purple-500">Enter Car Name</span>
          </label>
          <input
            type="text"
            name="carName"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => handleChange(e)}
            value={car.carName}
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <span className="text-purple-500">Enter Car Model</span>
          </label>
          <input
            type="text"
            name="model"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => handleChange(e)}
            value={car.model}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <span className="text-purple-500">Enter Year</span>
          </label>
          <input
            type="number"
            name="year"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => handleChange(e)}
            value={car.year}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="available"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            <span className="text-purple-500">Is Available ?</span>
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="available"
            name="available"
            value={car.available || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select Availability</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            <span className="text-purple-500">Car No.</span>
          </label>
          <input
            type="text"
            name="carNo"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => handleChange(e)}
            value={car.carNo}
          />
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-5 rounded focus:outline-none focus:shadow-outline w-25"
          >
            Add Car
          </button>
        </div>
      </form>
    </div>
  </div>
</>

  );
};

export default AddCar;
