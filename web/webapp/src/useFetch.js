import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    await axios.get(url).then(response => {
      setData(response.data.data); //여기가 가장중요하다, 여기서 data로 접근해야지 AddCardModal에서 data로 접근할려면 접근되지가 않는다
    });
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}
export default useFetch;