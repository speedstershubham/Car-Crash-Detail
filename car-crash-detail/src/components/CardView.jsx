import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardDetail from "./CardDetail";
import { TablePagination } from "@mui/material";

const CardView = ({
  car,
  data,
  page,
  setPage,
  rowsPerPage,
  setRowsPerPage,
}) => {
  return (
    <Box sx={{ minWidth: 150 }}>
      <Card variant="outlined">
        <CardDetail car={car} data={data} />
      </Card>
    </Box>
  );
};

export default CardView;
