import axios from "axios";

const API_URL= "http://localhost:8080/api/employees";

class EmployeeService{


    getAllEmployees(){
        return axios.get(API_URL)
    }

    getEmployeeById(id){
        return axios.get(API_URL+id);
    }

    createEmployee(employee){
        return axios.post(API_URL,employee);
    }

    updateEmployee(id,car){
        return axios.put(API_URL+id,car);
    }

    deleteCar(id){
        return axios.delete(API_URL+id);
    }
}

export default new EmployeeService();