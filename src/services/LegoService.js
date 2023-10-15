import axios from "axios";

const LEGO_API_BASE_URL = "http://localhost:8080/api/v1/legos";

class LegoService {
    saveLego(lego) {
        return axios.post(LEGO_API_BASE_URL, lego);
    }

    getLegos() {
        return axios.get(LEGO_API_BASE_URL);
    }

    deleteLego(id) {
        return axios.delete(LEGO_API_BASE_URL + "/" + id);
    }

    getLegoById(id) {
        return axios.get(LEGO_API_BASE_URL + "/" + id);
    }

    updateLego(lego, id) {
        return axios.put(LEGO_API_BASE_URL + "/" + id, lego);
    }
}

export default new LegoService();
