import axios from 'axios';

import {Authenticate} from "../guard";
import {ErrorCode} from "../enums";
import {LocalStorageKey} from "../constants";
import {message} from "antd";

export const axiosGet = ({url, config}) =>
    axios.get(url, config)
        .then(res => handleData(res))
        .catch(err => handleError(err));

export const axiosPost = ({url, data, config}) =>
    axios.post(url, data, config)
        .then(res => handleData(res))
        .catch(err => handleError(err));

export const axiosPut = ({url, data, config}) =>
    axios.put(url, data, config)
        .then(res => handleData(res))
        .catch(err => handleError(err));

export const axiosDelete = ({url, config}) =>
    axios.delete(url, config)
        .then(res => handleData(res))
        .catch(err => handleError(err));

export const axiosPatch = ({url, config}) =>
    axios.patch(url, config)
        .then(res => handleData(res))
        .catch(err => handleError(err));

export const getBodyData = (body) => {
    if (body) {
        const {header: {isSuccessful, resultMessage}, data} = body;

        if (isSuccessful === true) {
            return data;
        }

        message.error(`Error: ${resultMessage}`);
    }
}

const handleData = (res) => {
    const {header} = res.data;
    const {isSuccessful, resultCode} = header;

    if (!header) {
        Authenticate().logOut(window.location.pathname);

        return Promise.reject();
    }

    if (header && isSuccessful === false) {
        const errorCode = ErrorCode.resolve(resultCode);

        if (errorCode && errorCode.isLogout) {
            localStorage.setItem(LocalStorageKey.ERROR, errorCode.message);

            Authenticate().logOut(window.location.pathname);

            return Promise.reject();
        }
    }

    return Promise.resolve(res.data);
};

const handleError = (err) => {
    if (err.response && ErrorCode.resolve(err.response.status) === ErrorCode.ACCESS_DENIED) {
        localStorage.setItem(LocalStorageKey.ERROR, ErrorCode.ACCESS_DENIED.message);
    } else if (!err.response) {
        localStorage.setItem(LocalStorageKey.ERROR, ErrorCode.SESSION_EXPIRED.message);
    } else {
        localStorage.setItem(LocalStorageKey.ERROR, "Unknown");
    }

    // Authenticate().logOut(window.location.pathname);

    return Promise.reject(err.response || err.message);
};


