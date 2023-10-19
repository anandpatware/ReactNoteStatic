import "./App.css";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Note from "./Components/Note";
import { useState } from "react";

function App() {
  const [notelist, setNotelist] = useState([]);

  const addNote = (note) => {
    setNotelist((prevData) => {
      return [...prevData, note];
    });
  };
  const deleteNote = (id) => {
    console.log(id);
    setNotelist((prevData) =>
      prevData.filter((ele, index) => {
        return index !== id;
      })
    );
  };

  return (
    <div className="App">
      <Navbar />
      <Card add={addNote} />
      <div
        className="notes"
        style={{
          width: "100%",
          display: "flex",
          margin: "auto",
          flexWrap: "wrap",

          justifyContent: "start",
        }}
      >
        {notelist.map((ele, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={ele.title}
              desc={ele.desc}
              deletenote={deleteNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
