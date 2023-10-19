import { useState } from "react";
import Note from "./Note";
import { FcPlus } from "react-icons/fc";
function Card(props) {
  const [note, setNote] = useState({
    title: "",
    desc: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    console.log({ name, value });
    setNote((oldData) => {
      return { ...oldData, [name]: value };
    });
  };
  return (
    <>
      <div
        className="positining"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "start",
          marginTop: "3rem",
        }}
      >
        <div
          className="container"
          style={{
            width: "40%",
            height: "50rem",
            backgroundColor: "white",
            boxShadow: "0px 0px 2rem gray",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            borderRadius: "2rem",
          }}
        >
          <input
            type="text"
            placeholder="Title"
            name="title"
            value={note.title}
            style={{
              height: "13.5rem",
              width: "70%",
              fontSize: "4rem",
              color: "lightgray",
              borderRadius: "2rem",
              border: "1px solid white",
              margin: "2.5rem",
            }}
            autoComplete="off"
            onChange={InputEvent}
          />
          <textarea
            type="text"
            placeholder="Description"
            style={{
              height: "25.5rem",
              width: "70%",
              borderRadius: "2rem",
              fontSize: "4rem",
              border: "1px solid white",
              padding: "20px",
            }}
            name="desc"
            onChange={InputEvent}
            value={note.desc}
          />

          <FcPlus
            style={{
              fontSize: "20rem",
            }}
            onClick={() => props.add(note)}
          />
        </div>
      </div>
    </>
  );
}
export default Card;
