import React from "react";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Redirect } from "react-router-dom";
const CardDetail = ({ car, data }) => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  const submit = () => {
    console.log("4455445");
    return <Redirect to="/detail" />;
  };

  return (
    <React.Fragment>
      <Box sx={{ p: 2, border: "0px solid grey", m: "2rem" }}>
        <CardActions>
          <Button onClick={submit} size="small">
            {car?.vehicle_type_code1}
          </Button>
          <CardContent>
            <Typography variant="h5" component="div">
              first car {car?.vehicle_type_code1}
            </Typography>
            <Typography variant="h5" component="div">
              {car?.vehicle_type_code2
                ? `Second Car ${car?.vehicle_type_code2}`
                : ""}
            </Typography>

            <Typography variant="body2">
              Car Crash Date {car?.crash_date}
              <br />
              Car Crash Time {car?.crash_time}
            </Typography>
          </CardContent>
        </CardActions>
      </Box>
    </React.Fragment>
  );
};

export default CardDetail;
