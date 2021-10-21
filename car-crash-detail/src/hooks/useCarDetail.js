import React, { useEffect, useState } from "react";
import axios from "axios";

const useCarDetail = () => {
  const [car, setCar] = useState();

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    try {
      const getCar = await axios.get(
        "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
      );
      setCar(getCar);
    } catch (error) {
      console.log(error);
    }
  };
  return { car };
};

export default useCarDetail;
