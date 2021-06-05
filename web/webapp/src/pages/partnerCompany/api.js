import axios from "axios";

export const getCompanyList = async (setFunction) => {
    const url = "/api/company/alim/partner";
    const header = {
        headers: {
            Authorization: `eyJyZWdEYXRlIjoxNjIyNzg0MzUyMTYzLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU4iLCJleHAiOjE2MjUzNzYzNTIsImVtYWlsIjoicm9wZXplQGdtYWlsLmNvbSJ9.eT37kOIm-lswh9jelaPMFxB2xf_NJRV5SedMjcVIPWg`
        }
    }
    await axios.get(url, header)
        .then(function(response) {
            console.log(JSON.stringify(response.data));
            return response.data;
        })
        .catch(function(error) {
            console.log("실패");
        })
}