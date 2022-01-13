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

  return (
    <>
      <Header />
      <CreateNote passNote={AddNote} />
      <div className="outerDiv">
        {AddItems.map((value, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={value.title}
              content={value.content}
              passDelete={deleteNote}
            />
          );
        })}
      </div>

      <Footer />
    </>
  );
}

export default App;
