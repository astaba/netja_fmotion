import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import PizzaContextProvider from "./store/PizzaContextProvider";
import Modal from "./components/Modal";
import ResetWarning from "./components/ResetWarning";

function App() {
  const location = useLocation();
  // console.log(location);
  const [isOpenModal, setIsOpenModal] = useState(false);

  // const { pathname } = location;
  // useEffect(() => {
  //   setIsOpenModal(false);
  // }, [pathname]);

  return (
    <PizzaContextProvider>
      <Header />
      <AnimatePresence mode="wait">
        {isOpenModal && (
          <Modal setIsOpenModal={setIsOpenModal}>
            <ResetWarning setIsOpenModal={setIsOpenModal} />
          </Modal>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait" onExitComplete={() => setIsOpenModal(false)}>
        <Routes location={location} key={location.pathname}>
          <Route path="/base" element={<Base />} />
          <Route path="/toppings" element={<Toppings />} />
          <Route
            path="/order"
            element={<Order setIsOpenModal={setIsOpenModal} />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </PizzaContextProvider>
  );
}

export default App;
