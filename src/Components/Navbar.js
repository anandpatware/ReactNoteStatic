function Navbar() {
  return (
    <>
      <div
        className="box"
        style={{
          margin: "0px",
          padding: "0px",
          backgroundColor: "yellow",
          width: "100%",
          height: "18.5rem",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          boxShadow: "0px 0px 30px gray",
        }}
      >
        <div
          className="logo"
          style={{
            padding: "20px",
            color: "white",

            fontSize: "100px",
            marginLeft: "50px",
          }}
        >
          MYLOGO
        </div>
      </div>
    </>
  );
}
export default Navbar;
