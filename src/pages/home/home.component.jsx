import React from "react";
import { Grid, Typography } from "@material-ui/core";

const HomeComponent = (props) => {
  let loginUserOrAdmin = JSON.parse(localStorage.getItem("loginUserOrAdmin"));
  //   console.log(loginUserOrAdmin);
  const { Logout } = props;
  return (
    <Grid container>
      <Typography
        style={{
          fontSize: "10vh",
          color: "green",
          margin: "14vh 15vh 0 14vh",
        }}
      >
        Hello {loginUserOrAdmin[loginUserOrAdmin.length - 1].firstName}
        {loginUserOrAdmin[loginUserOrAdmin.length - 1].lastName}
      </Typography>
      <button
        onClick={Logout}
        style={{
          fontSize: "10vh",
          color: "green",
          margin: "14vh 15vh 0 14vh",
        }}
      >
        Logout
      </button>
    </Grid>
  );
};

export default HomeComponent;
