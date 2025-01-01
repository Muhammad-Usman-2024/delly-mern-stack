import React from "react";
import DealsOfTheDay from "./components/DealsOfTheDay";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NearBy from "./components/NearBy";

const App = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="space-y-16 py-8">
        <NearBy />
        <DealsOfTheDay />
      </div>
    </>
  );
};

export default App;
