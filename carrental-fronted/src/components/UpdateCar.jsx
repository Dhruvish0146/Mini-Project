import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import carrentalService from "../service/carrental.service";

const UpdateCar = () => {
  const [car, setCar] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  const [msg, setMsg] = useState("");

  useEffect(() => {
    carrentalService
      .getCarById(id)
      .then((res) => {
        setCar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setCar({ ...car, [e.target.name]: value });
  };

  const CarUpdate = (e) => {
    e.preventDefault();
    carrentalService
      .updateCar(id, car)
      .then((res) => {
        navigate("/carList");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container mt-3">
        <div className="flex justify-center">
          <div className="w-full md:w-1/2">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="text-3xl text-center mb-4">Update Car</div>
              {msg && <p className="text-lg text-center text-green-500">{msg}</p>}

              <form onSubmit={(e) => CarUpdate(e)} className="mb-4">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Enter Car Name</label>
                  <input
                    type="text"
                    name="carName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => handleChange(e)}
                    value={car.carName}
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Enter Car Model</label>
                  <input
                    type="text"
                    name="model"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => handleChange(e)}
                    value={car.model}
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Enter Year</label>
                  <input
                    type="number"
                    name="year"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => handleChange(e)}
                    value={car.year}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="available" className="block text-gray-700 text-sm font-bold mb-2">Is Available ?</label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="available"
                    name="available"
                    value={car.available }
                    onChange={handleChange}
                    required
                  >
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Car No.</label>
                  <input
                    type="text"
                    name="carNo"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={(e) => handleChange(e)}
                    value={car.carNo}
                  />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateCar;
