import axios from "axios";

const LIKE_API_BASE_URL = "http://localhost:8080/api/v1/like";

class LikeService {
    getLike() {
        return axios.get(LIKE_API_BASE_URL);
    }

    getLikeById(id) {
        return axios.get(LIKE_API_BASE_URL + "/" + id);
    }

    putLike(id) {
        return axios.put(LIKE_API_BASE_URL + "/" + id);
    }

}

export default new LikeService();
