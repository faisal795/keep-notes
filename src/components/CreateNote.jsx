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

  return (
    <>
      <div className="main_note">
        <form>
          {Expend ? (
            <input
              type="text"
              name="title"
              value={Note.title}
              onChange={InputEvent}
              placeholder="Write a Title"
              autoComplete="0ff"
            ></input>
          ) : null}
          <textarea
            rows=""
            column=""
            name="content"
            value={Note.content}
            onChange={InputEvent}
            placeholder="Take a Note..."
            onClick={expendSpread}
            onDoubleClick={expendClose}
          ></textarea>
          {Expend ? (
            <Button onClick={addNoteEvent}>
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
}
