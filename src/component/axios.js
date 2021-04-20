import Axios from "axios";

export const axios = Axios.create({
    baseURL: "https://rn-app-bc1e7.firebaseio.com",
    headers: { Auth: "Simple AUTH" },
    timeout: 3000,
});