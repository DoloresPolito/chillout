import React from "react";
import MessageSent from "./sections/MessageSent";
import Landing from "./sections/Landing";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/chillout" element={<Landing />} />
        <Route path="/message" element={<MessageSent />} />
      </Routes>
    </div>
  );
}

export default App;
