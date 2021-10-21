import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const FilterContainer = () => {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid p={8} spacing={2}>
        <Grid item xs={6} md={8}>
          <Item>
            <h1>Filter</h1>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FilterContainer;
