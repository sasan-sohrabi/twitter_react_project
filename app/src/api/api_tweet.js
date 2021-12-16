import {getAxiosInstance, getAxiosInstanceJsonServer} from "./api";

export const getAllTweets = (callback) => {
    getAxiosInstance().post("/getAllTweet")
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
        callback(false, error);
    })
};

export const getHashTags = (callback) => {
    getAxiosInstance().get("/getAllHashtags")
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
        callback(false, error);
    })
};

export const getUsers = (callback) => {
    getAxiosInstance().get("/getAllUser")
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
        callback(false, error);
    })
};

export const newTweetRequest = (callback) => {
    getAxiosInstance().post("/newTweet ")
        .then(response => {
            const data = response.data;
            callback(true, data);
        }).catch(error => {
        callback(false, error);
    })
};