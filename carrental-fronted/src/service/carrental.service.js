import axios from "axios";

const API_URL= "http://localhost:8080/api";

class CarRentalService{

    getAllCars(){
        return axios.get(API_URL+"/cars")
    }

    getCarById(id){
        return axios.get(API_URL+"/cars/"+id);
    }

    addCar(car){
        return axios.post(API_URL+"/cars",car);
    }

    updateCar(id,car){
        return axios.put(API_URL+"/cars/"+id,car);
    }

    deleteCar(id){
        return axios.delete(API_URL+"/cars/"+id);
    }
}

export default new CarRentalService();