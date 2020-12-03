import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./admin.css";

const AdminComponent = (props) => {
  let loginUserOrAdmin = JSON.parse(localStorage.getItem("user"));
  const { Logout } = props;
  return (
    <Paper style={{ minHeight: "100vh" }}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>UserName</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Type</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loginUserOrAdmin.map((row) => (
              <TableRow key={row.email}>
                <TableCell>{row.firstName}</TableCell>
                <TableCell>{row.lastName}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.userName}</TableCell>
                <TableCell>{row.password}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.type}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
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
    </Paper>
  );
};

export default AdminComponent;
