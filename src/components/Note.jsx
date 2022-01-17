import React from "react";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Button from "@material-ui/core/Button";

const Note = (props) => {
  const DeleteItem = () => {
    props.passDelete(props.id);
  };

  return (
    <>
      <div className="note" style={{color: `${(props.textMode === 'DarkMode')? '#000': '#fff'}`, background: `${(props.textMode === 'DarkMode')? '#fff': '#01033be8'}`}}>
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <Button className="btn" onClick={DeleteItem} >
          <DeleteOutlineIcon className="deleteIcon" />
        </Button>
      </div>
    </>
  );
};
export default Note;
