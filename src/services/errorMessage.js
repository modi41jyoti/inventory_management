import { Typography } from "@material-ui/core";
import React from "react";

export default function ErrorMessage({ error }) {
  if (error) {
    switch (error.type) {
      case "required":
        return (
          <Typography style={{ color: "red", margin: "-2vh 0 1vh 5.5vh" }}>
            This is required
          </Typography>
        );
      case "minLength":
        return (
          <Typography style={{ color: "red", margin: "-2vh 0 1vh 5.5vh" }}>
            minimum 8 character required
          </Typography>
        );
      case "pattern":
        return error.ref.name === "email" ? (
          <Typography style={{ color: "red", margin: "-2vh 0 1vh 5.5vh" }}>
            mail should be like "abc@abc.abc"
          </Typography>
        ) : (
          <Typography style={{ color: "red", margin: "-2vh 0 1vh 5.5vh" }}>
            1 capical and 1 small Alphabate, 1 special character, 1 number
            required
          </Typography>
        );
      case "validate":
        return (
          <Typography style={{ color: "red", margin: "-2vh 0 1vh 5.5vh" }}>
            already used
          </Typography>
        );
      case "match":
        return <Typography>password not match</Typography>;
      default:
        return null;
    }
  }
  return null;
}
