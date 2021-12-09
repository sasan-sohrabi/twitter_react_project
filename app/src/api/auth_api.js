import {getAxiosInstance} from "./api";

export const loginApi = (user, callback) => {
    getAxiosInstance().post("/login", user)
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
        callback(false, error.response.data.message);
    })
};
