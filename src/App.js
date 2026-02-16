import React from "react";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";
import Body from "./components/Body"

function App() {
  return (
    <>
      <CustomNavbar />
      <div style={{ paddingTop: "90px", textAlign: "center" }}>
        <Body/>
      </div>
      <Footer/>
    </>
  );
}

export default App;