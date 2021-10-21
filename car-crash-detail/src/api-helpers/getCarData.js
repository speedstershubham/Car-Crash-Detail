import axios from "axios";

const getCarData = async () => {
  const getCar = await axios.get(
    "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
  );
  const cars = getCar?.data;
  return cars;
};

export default getCarData;
