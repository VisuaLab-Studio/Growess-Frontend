import React from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./pages/landing/Hero";

const App = () => {
  return (
    <main className="w-full relative overflow-hidden">
      <Loader />
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
