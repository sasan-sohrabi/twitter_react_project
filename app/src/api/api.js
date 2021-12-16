import Axios from "axios";

export const getAxiosInstanceJsonServer = () => {
    return Axios.create({
        baseURL: "http://localhost:3000",
        headers: {
            all: {
                API_KEY: "kdjslkjflksjdklfjsldfj"
            }
        },
    });
}

export const getAxiosInstance = () => {
    return Axios.create({
        baseURL: "https://twitterapi.liara.run/api",
        headers: {
            'x-auth-token': localStorage.getItem("x-auth-token")
        },
    });
}
