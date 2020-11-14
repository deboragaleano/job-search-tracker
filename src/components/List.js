import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const data = [
  {
    id: "1",
    company: "Some Company",
    position: "FrontEnd",
    jobLink: "https://i.ibb.co/54CHvmW/workout-app.png",
    dateApplied: "Nov 7",
  },
  {
    id: "2",
    company: "Yes Company",
    position: "Customer Support",
    jobLink: "https://i.ibb.co/54CHvmW/workout-app.png",
    dateApplied: "Nov 7",
  },
  {
    id: '3',
    company: "Company",
    position: "Backend",
    jobLink: "https://i.ibb.co/54CHvmW/workout-app.png",
    dateApplied: "Nov 10",
  },
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  btn: {
    border: "none",
    cursor: "pointer",
    backgroundColor: "inherit",
  },
});

export default function List() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Company</StyledTableCell>
            <StyledTableCell>Position</StyledTableCell>
            <StyledTableCell>Job Posting</StyledTableCell>
            <StyledTableCell>Date Applied</StyledTableCell>
            <StyledTableCell>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data) => (
            <StyledTableRow key={data.id}>
              <StyledTableCell component="th" scope="row">
                {data.company}
              </StyledTableCell>
              <StyledTableCell>{data.position}</StyledTableCell>
              <StyledTableCell>
                <a
                  href={data.jobLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link
                </a>
              </StyledTableCell>
              <StyledTableCell>{data.dateApplied}</StyledTableCell>
              <StyledTableCell>
                <button className={classes.btn}>
                  <i className="fas fa-trash-alt"></i>{" "}
                </button>
                <button className={classes.btn}>
                  <i className="fas fa-edit"></i>
                </button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
