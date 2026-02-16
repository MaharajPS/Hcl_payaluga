import React from "react";
import CustomNavbar from "./components/CustomNavbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CustomNavbar />
      <div style={{ paddingTop: "90px", textAlign: "center" }}>
        <h1>Welcome to My Website</h1>
      </div>
      <Footer/>
    </>
  );
}

export default App;