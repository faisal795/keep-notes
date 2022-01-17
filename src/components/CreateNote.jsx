import * as React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";

export default function CreateNote(props) {

  const [Expend, setExpend] = useState(false);
  const [Note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setNote((previousValue) => {
      return {
        ...previousValue,
        [name]: value,
      };
    });
  };

  const addNoteEvent = () => {
    props.passNote(Note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expendSpread = () => {
    setExpend(true)
  }
  const expendClose = () => {
    setExpend(false)
  }

  const changBgColor = {
    color: `${(props.textMode === 'DarkMode')? '#000': '#fff'}`,
    background: `${(props.textMode === 'DarkMode')? '#fff': '#01033be8'}`
  }

  return (
    <>
      <div className="main_note">
        <form>
          {Expend ? (
            <input style={changBgColor}
              type="text"
              name="title"
              value={Note.title}
              onChange={InputEvent}
              placeholder="Write a Title"
              autoComplete="0ff"
            ></input>
          ) : null}
          <textarea style={changBgColor} 
            rows="2"
            column=""
            name="content"
            value={Note.content}
            onChange={InputEvent}
            placeholder="Take a Note..."
            onClick={expendSpread}
            onDoubleClick={expendClose}
          ></textarea>
          {Expend ? (
            <Button onClick={addNoteEvent} style={changBgColor}>
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
}
