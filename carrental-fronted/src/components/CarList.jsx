import React, { useEffect, useState } from "react";
import carrentalService from "../service/carrental.service";
import { Link } from "react-router-dom";
import { TrashIcon, PencilIcon } from "@heroicons/react/outline";

const CarList = () => {
  const [carList, setCarList] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    carrentalService
      .getAllCars()
      .then((res) => {
        setCarList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteCar = (id) => {
    if (window.confirm("Are you sure you want to delete this car?")) {
      carrentalService
        .deleteCar(id)
        .then((res) => {
          setMsg("Delete Successfully");
          init();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="bg-purple-100 min-h-screen">
        <div className="container mx-auto py-8">
          <div className="bg-white p-6 rounded-lg shadow-md relative">
            <h1 className="text-3xl font-semibold text-center mb-8 bg-purple-500 text-white py-2 rounded-lg font-sans">
              All Car List
            </h1>

            {msg && (
              <p className="text-lg text-center text-green-500" role="alert">
                {msg}
                <button
                  className="btn btn-sm btn-success ms-1"
                  onClick={() => {
                    setMsg("");
                  }}
                >
                  Ok
                </button>
              </p>
            )}
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Serial No</th>
                  <th className="px-4 py-2">Car Name</th>
                  <th className="px-4 py-2">Model</th>
                  <th className="px-4 py-2">Year</th>
                  <th className="px-4 py-2">Available</th>
                  <th className="px-4 py-2">Car No.</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {carList.map((car, index) => (
                  <tr key={index}>
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{car.carName}</td>
                    <td className="border px-4 py-2">{car.model}</td>
                    <td className="border px-4 py-2">{car.year}</td>
                    <td className="border px-4 py-2">
                      {car.available ? "Available" : "Not Available"}
                    </td>
                    <td className="border px-4 py-2">{car.carNo}</td>
                    <td className="border px-4 py-2 flex items-center">
                      <Link
                        to={"../updateCar/" + car.id}
                        className="btn btn-sm btn-primary flex items-center mr-2"
                      >
                        <PencilIcon className="w-5 h-5" />
                      </Link>
                      <button
                        onClick={() => deleteCar(car.id)}
                        className="btn btn-sm btn-danger flex items-center"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center mt-8">
              <Link
                to="../addCar"
                className="btn btn-sm btn-success hover:bg-green-700 h-12 w-32 flex items-center justify-center"
              >
                Add Car
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarList;
