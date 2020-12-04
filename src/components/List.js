import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "./Modal";
import Search from "./Search";
// import AppForm from "./AppForm";

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

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  modal: {
    margin: theme.spacing(3)
  }
}));

export default function List({ applications, remove, addOrEdit, handleSearch, search }) {
  const classes = useStyles();

  const handleEditButton = (id) => {
    addOrEdit(id);
  };

  return (
    <>
      <div className={classes.toolbar}>
        <Search search={search} handleSearch={handleSearch} />
        <Modal className={classes.modal} addOrEdit={addOrEdit} />
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Company</StyledTableCell>
              <StyledTableCell>Position</StyledTableCell>
              <StyledTableCell>Job Posting</StyledTableCell>
              <StyledTableCell>Date Applied</StyledTableCell>
              <StyledTableCell>Note</StyledTableCell>
              <StyledTableCell>Actions</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {applications.map((app) => (
              <StyledTableRow key={app.id}>
                <StyledTableCell component="th" scope="row">
                  {app.company}
                </StyledTableCell>
                <StyledTableCell>{app.position}</StyledTableCell>
                <StyledTableCell>
                  <a href={app.link} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </StyledTableCell>
                <StyledTableCell>{app.date}</StyledTableCell>
                <StyledTableCell>{app.note}</StyledTableCell>
                <StyledTableCell>
                  <IconButton onClick={() => handleEditButton(app.id)}>
                    {/* {openModal ? <Modal /> : null} */}
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => remove(app.id)}>
                    <DeleteIcon />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
