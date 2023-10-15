import axios from "axios";

const CART_API_BASE_URL = "http://localhost:8080/api/v1/cart";

class CartService {
    getCart() {
        return axios.get(CART_API_BASE_URL);
    }

    getCartById(id) {
        return axios.get(CART_API_BASE_URL + "/" + id);
    }

}

export default new CartService();
