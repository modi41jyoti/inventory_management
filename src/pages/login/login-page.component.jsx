import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { userAdmin } from "../../services/user.service.js";
import ErrorMessage from "../../services/errorMessage";
import ownerImage from "../../assest/login-clipart-user.jpg";
import linkedinImage from "../../assest/linkedin.png";
import googleImage from "../../assest/google.png";
import facebookImage from "../../assest/facebook.jpeg";
import browserHistory from "browserHistory";

const LoginPageComponent = (props) => {
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
  } = useForm();
  const { singedUpEmail, passwordVerification } = props;
  return (
    <Paper style={{ minHeight: "100vh" }}>
      <Grid container style={{ overflow: "hidden" }}>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <form
            onSubmit={handleSubmit(userAdmin)}
            style={{
              boxShadow: "0 0 40px 10px black",
              overflow: "hidden",
              margin: "5vw 0 1vw 0",
            }}
          >
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "2vw 0 2vw 0",
                padding: "0 0 0 0",
                fontSize: "2vw",
              }}
            >
              Login page
            </Typography>
            <input
              type="image"
              src={ownerImage}
              alt="ownerImage"
              style={{
                width: "3vw",
                height: "3vw",
                borderRadius: "50%",
                marginLeft: "15vw",
              }}
            />
            <input
              ref={register({
                required: "first signup please",
                validate: { singedUpEmail },
              })}
              name="email"
              placeholder="Email | UserName"
              type="text"
            />
            <ErrorMessage error={errors.email} />
            {errors.email && (
              <Typography style={{ color: "red", margin: "-1vw 0 1vw 2.8vw" }}>
                you are not signed up
              </Typography>
            )}
            <Grid container style={{ margin: "0 0 1vh 20vw" }}>
              Forget Password?
            </Grid>
            <input
              ref={register({
                required: "check your password",
                validate: { passwordVerification },
              })}
              name="password"
              placeholder="Password"
              type="password"
              // defaultValue="Aa@123456"
            />
            <ErrorMessage error={errors.password} />
            {errors.password && (
              <Typography style={{ color: "red", margin: "-2vh 0 1vh 5.5vh" }}>
                Wrong Password
              </Typography>
            )}
            <input
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "26.6vw",
                height: "5vh",
                margin: "0 0 0 5.5vh",
              }}
            />
            <Grid style={{ textAlign: "center", margin: "2vh 0 2vh 0" }}>
              Don't have account?
              <span
                onClick={() => {
                  browserHistory.push("./signup");
                }}
                style={{ color: "green", fontSize: "2vh" }}
              >
                SignUp
              </span>
            </Grid>
            <Grid
              container
              style={{ display: "flex", justifyContent: "Center" }}
            >
              <input
                type="image"
                src={linkedinImage}
                alt="linkedinImage"
                style={{ width: "3vw", height: "3vw" }}
              />
              <input
                type="image"
                src={googleImage}
                alt="googleImage"
                style={{ width: "3vw", height: "3vw", borderRadius: "50%" }}
              />
              <input
                type="image"
                src={facebookImage}
                alt="facebookImage"
                style={{ width: "3vw", height: "3vw", borderRadius: "50%" }}
              />
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LoginPageComponent;
