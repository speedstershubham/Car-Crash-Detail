import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, TablePagination } from "@mui/material";
import CardView from "./CardView";

const CardTable = ({ data }) => {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    console.log("111223");
    setRowsPerPage(parseInt(event.target.value, 5));
    setPage(0);
  };

  console.log({ data });
  return (
    <>
      {" "}
      <Grid container spacing={3} className={classes.gridContainer}>
        {data
          ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((car) => (
            <Grid item xs={12} sm={6} md={4}>
              <CardView car={car} />
            </Grid>
          ))}
      </Grid>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
};
const useStyles = makeStyles({
  gridContainer: {
    paddingRight: "40px",
    paddingLeft: "40px",
  },
});

export default CardTable;
