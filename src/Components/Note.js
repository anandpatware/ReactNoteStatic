import { AiFillDelete } from "react-icons/ai";

function Note(props) {
  return (
    <>
      <div className="position">
        <div
          className="body"
          style={{
            color: "white",
            height: "30rem",
            width: "60rem",
            boxShadow: "0 0 30px gray",
            borderRadius: "30px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column", // Change to row to place items in a row
            alignItems: "center",
            justifyContent: "center", // Add this to move the delete button to the end
            margin: "5rem",
            padding: "2rem",
          }}
        >
          <h1 style={{ fontSize: "5rem", color: "black", margin: "0px" }}>
            {props.title}
          </h1>
          <p style={{ color: "black", fontSize: "3rem", margin: "0px" }}>
            {props.desc}
          </p>

          <AiFillDelete
            style={{
              width: "5rem",
              height: "5rem",
              color: "red",
              cursor: "pointer",
            }}
            onClick={() => {
              props.deletenote(props.id);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Note;
