import axios from "axios";

export const getCompanyList = async () => {
  const url = "/api/company/alim/partner";
  const header = {
    headers: {
      Authorization: `eyJyZWdEYXRlIjoxNjIyNzg0MzUyMTYzLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU4iLCJleHAiOjE2MjUzNzYzNTIsImVtYWlsIjoicm9wZXplQGdtYWlsLmNvbSJ9.eT37kOIm-lswh9jelaPMFxB2xf_NJRV5SedMjcVIPWg`
    }
  }
  const listData = await axios.get(url, header)
  .then(function (response) {
    //console.log(JSON.stringify(response.data.data));
    return response.data.data.partnerCompanies
  })
  .catch(function (error) {
    console.log("실패");
  })
  return listData;
}