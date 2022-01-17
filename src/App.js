import React, { useState } from "react";
import "./App.css";
import CreateNote from "./components/CreateNote";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  const [AddItems, setAddItems] = useState([]);
  const AddNote = (myNote) => {
    setAddItems((previousValue) => {
      return [...previousValue, myNote];
    });
  };
  const deleteNote = (id) => {
    setAddItems((oldData) => {
      return oldData.filter((curnt, indx) => {
        return indx !== id;
      });
    });
  };

  const [Mode, setMode] = useState("#fff");
  const [ModeText, setModeText] = useState("DarkMode");
  document.body.style.background = Mode;
  const Togglefun = () => {
    console.log('i m click');
    if (Mode === "#fff" && ModeText === "DarkMode") {
      setMode("#01033be8");
      setModeText("LightMode");
    } else {
      setMode("#fff");
      setModeText("DarkMode");
     
    }
  };

  return (
    <>
      <Header mode={Mode} changColorfun={Togglefun} textMode={ModeText} />
      <CreateNote passNote={AddNote} textMode={ModeText} />
      <div className="outerDiv">
        {AddItems.map((value, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={value.title}
              content={value.content}
              passDelete={deleteNote}
              textMode={ModeText}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default App;
