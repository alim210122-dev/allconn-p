import {axiosGet, getBodyData} from "./tool";

export const getAccessibleMenuList = () => axiosGet({url: `/api/menu/item`})
    .then(getBodyData);