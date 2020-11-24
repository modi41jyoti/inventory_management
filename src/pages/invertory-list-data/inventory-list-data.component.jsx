import { Grid, Paper, Typography } from "@material-ui/core";

const InventoryDetailComponent = () => {
  return (
    <Paper style={{ minHeight: "100vh" }}>
      <Grid container>
        <Grid item>
          <Typography>Hello its a inventory Detail</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default InventoryDetailComponent;
