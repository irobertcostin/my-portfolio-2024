import React, { useRef } from "react"
import Home from "./components/home-components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




function App() {

  const projects = useRef()
  const services = useRef()
  const about = useRef()
  const contact = useRef()


  return (
    <div className="w-full ">
      <Navbar projects={projects} services={services} about={about} contact={contact} />
      <Home projects={projects} services={services} about={about} contact={contact} />
      <Footer />
    </div>
  );
}

export default App;
