import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";

export default function CustomizedButton(props) {
  return (
    <>
      <Button
        disableRipple
        variant="outlined"
        color="primary"
        // onClick={handleClickOpen}
      >
        {/* {props.icon === 'add' ? <AddIcon /> ? props.icon === 'edit' ? <EditIcon /> : ''} */}
        {/* // {props.type} */}
      </Button>
    </>
  );
}
