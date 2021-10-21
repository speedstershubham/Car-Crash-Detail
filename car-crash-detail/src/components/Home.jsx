import React from "react";
import useCarDetail from "../hooks/useCarDetail";
import CardTable from "./CarTable";
import FilterContainer from "./FilterContainer";

const Home = () => {
  const { car } = useCarDetail();
  console.log(car?.data);
  const carDetail = car?.data;
  return (
    <>
      <FilterContainer />
      <CardTable data={carDetail} />
    </>
  );
};

export default Home;
