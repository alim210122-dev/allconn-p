/* 비동기 API */
import axios from "axios";

export const getSalesData = async () => {
    const salesCode = await axios.get('/code/salesCode/getSalesCode');
    return salesCode;
};

