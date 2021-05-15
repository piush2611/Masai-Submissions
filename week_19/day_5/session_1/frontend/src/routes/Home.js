import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="container-fluid h-100">
      <Navbar />
      <img
        src="https://images.pexels.com/photos/1226398/pexels-photo-1226398.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=auto"
        alt=""
        className="img-fluid"
      />
    </div>
  );
}
