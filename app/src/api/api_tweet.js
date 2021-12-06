import {getAxiosInstance} from "./api";

export const getAllTweets = (callback) => {
    getAxiosInstance().get("/tweets")
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
        callback(false, error);
    })
};