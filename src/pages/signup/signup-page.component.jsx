import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { UserService } from "../../services/user.service.js";
import ErrorMessage from "../../services/errorMessage";
import "./signup-page.css";
import browserHistory from "../../browserHistory";

const SignupPageComponent = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const {
    AvailbleEmail,
    AvailbleUserName,
    PasswordMatch,
    PasswordStore,
  } = props;
  return (
    <Paper style={{ minHeight: "100vh" }}>
      <Grid container style={{ overflow: "hidden" }}>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <form
            onSubmit={handleSubmit(UserService)}
            style={{ boxShadow: "0 0 40px 10px black", overflow: "hidden" }}
          >
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "5vw 0 2vw 0",
                padding: "2vh 0 0 0",
                fontSize: "2vw",
              }}
            >
              Sign up page
            </Typography>
            <input
              ref={register({ required: true })}
              name="firstName"
              placeholder="First Name"
              type="text"
              // defaultValue="jyoti"
            />
            <ErrorMessage error={errors.firstName} />
            <input
              ref={register({ required: true })}
              name="lastName"
              placeholder="Last Name"
              type="text"
              // defaultValue="modi"
            />
            <ErrorMessage error={errors.lastName} />
            <select name="gender" ref={register({ required: true })}>
              <option value="">Select Gender</option>
              <option value="mail">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
            <ErrorMessage error={errors.gender} />
            <input
              ref={register({
                required: true,
                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}^\S+@\S+$\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                validate: { AvailbleEmail },
              })}
              onBlur={(e) => AvailbleEmail(e.target.value)}
              name="email"
              placeholder="Email"
              type="text"
            />
            <ErrorMessage error={errors.email} />
            <input
              name="userName"
              placeholder="UserName"
              type="text"
              onBlur={(e) => AvailbleUserName(e.target.value)}
              ref={register({
                required: true,
                validate: { AvailbleUserName },
              })}
            />
            <ErrorMessage error={errors.userName} />

            <input
              ref={register({
                required: true,
                minLength: 8,
                pattern: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                validate: { PasswordStore },
              })}
              name="password"
              placeholder="Password"
              type="password"
              // defaultValue="Aa@123456"
            />
            <ErrorMessage error={errors.password} />

            <input
              ref={register({
                required: true,
                minLength: 8,
                validate: { PasswordMatch },
              })}
              name="conformPassword"
              placeholder="Conform Password"
              type="password"
            />
            <ErrorMessage error={errors.conformPassword} />
            {errors.conformPassword && (
              <Typography style={{ color: "red" }}>
                Password not match
              </Typography>
            )}
            <select ref={register({ required: true })} name="type">
              <option value="">Select Type</option>
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>
            <ErrorMessage error={errors.type} />

            <input type="submit" color="primary" variant="contained" />
          </form>
          <button
            style={{
              margin: "2vh 0 0 11vw",
            }}
            onClick={() => {
              browserHistory.push("/");
            }}
          >
            Back to Login Page
          </button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SignupPageComponent;
