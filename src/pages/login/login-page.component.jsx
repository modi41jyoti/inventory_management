import { Grid, Avatar, Paper, Button, Typography } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ownerImage from "../../assest/login-clipart-user.jpg";
import linkedinImage from "../../assest/linkedin.png";
import googleImage from "../../assest/google.png";
import facebookImage from "../../assest/facebook.jpeg";
import browserHistory from "browserHistory";

const useStyles = makeStyles((theme: Theme) => {
  createStyles({
    root: {
      "& MuiTextField-root": {
        margin: theme.spacing(5),
        width: "25ch",
        color: "#ba000d",
      },
    },
  });
});

const LoginPageComponent = () => {
  const classes = useStyles();
  return (
    <Paper style={{ minHeight: "100vh" }}>
      <Grid container>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Grid container direction="row">
            <Grid
              item
              direction="row"
              style={{
                boxShadow: "0px 0px 10px 15px black",
                // display: "flex",
                justifyContent: "center",
                marginTop: "10vh",
              }}
            >
              <Grid
                container
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Avatar
                  alt="loginImage"
                  src={ownerImage}
                  style={{ width: "8vh", height: "8vh", margin: "5vw 0 2vw 0" }}
                ></Avatar>
              </Grid>

              <form className={classes.root} noValidate autoComplete="off">
                <Grid container>
                  <TextField
                    required
                    id="outline-required"
                    label="Email"
                    variant="outlined"
                    style={{ width: "50vh", margin: "0px 1vw 0px 1vw" }}
                  />
                </Grid>
                <Typography
                  onClick={() => {
                    browserHistory.push("./restPassword");
                  }}
                  color="textSecondary"
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    lineHeight: "35px",
                    fontSize: "2vh",
                    margin: "0px 1vw 0px 0px",
                  }}
                >
                  Forget Password ?
                </Typography>
                <TextField
                  required
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  style={{
                    width: "50vh",
                    marginBottom: "2vh",
                    margin: "0px 1vw 0px 1vw",
                  }}
                />
              </form>
              <Grid
                container
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1vw",
                }}
              >
                <Button
                  onClick={() => {
                    browserHistory.push("./invertoryPage");
                  }}
                  variant="contained"
                  color="primary"
                >
                  LogIn
                </Button>
              </Grid>
              <Typography
                variant="h3"
                style={{
                  fontSize: "2vh",
                  margin: "1vw 0 1vw 0",
                  textAlign: "center",
                }}
              >
                Don't have account? &nbsp;
                <span
                  onClick={() => {
                    browserHistory.push("./signup");
                  }}
                >
                  SignUp
                </span>
              </Typography>
              <Grid
                container
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "4vh",
                }}
              >
                <Avatar
                  alt="linkedinImage"
                  src={linkedinImage}
                  style={{ marginRight: "1vw" }}
                ></Avatar>
                <Avatar
                  alt="googleImage"
                  src={googleImage}
                  style={{ marginRight: "1vw" }}
                ></Avatar>
                <Avatar alt="facebookImage" src={facebookImage}></Avatar>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LoginPageComponent;
