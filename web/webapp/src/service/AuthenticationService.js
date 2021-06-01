import {axiosPost, getBodyData} from "./tool";

export const login = (username, password) => {
    return axiosPost({
        url: `${process.env.REACT_APP_API_URL}/api/auth/login`,
        data: {
            username: username,
            password: password
        },
    }).then(getBodyData);
}