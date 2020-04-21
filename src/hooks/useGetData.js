import { useState, useEffect } from "react";
const url = "https://us-central1-gndx-cv.cloudfunctions.net/me";

const useGetData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("ERROR_API: ", error));
  }, []);

  return data;
};

export default useGetData;
