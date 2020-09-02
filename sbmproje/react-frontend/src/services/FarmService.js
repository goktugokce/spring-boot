import axios from 'axios';

const FARM_API_BASE_URL = "http://localhost:8080/api/farms";

class FarmService{

    getFarms(){
        return axios.get(FARM_API_BASE_URL);
    }

    createFarm(farm){
        return axios.post(FARM_API_BASE_URL,farm);
    }

    getFarmByID(farmID){
        return axios.get(FARM_API_BASE_URL + '/' + farmID);
    }

    updateFarm(farm, farmID){
        return axios.put(FARM_API_BASE_URL + '/' + farmID, farm);
    }

    deleteFarm(farmID){
        return axios.delete(FARM_API_BASE_URL + '/' + farmID);
    }
}

export default new FarmService()