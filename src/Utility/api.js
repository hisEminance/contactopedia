import axios from "axios";

const getRandomUser = () => {
    const response = axios.get("https://randomuser.me/api/", {
        headers: {},
        params: {
            size:1,
        },
    });
    return response;
};
export {getRandomUser};