import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import useToken from "./hooks/useToken";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import { useSelector } from "react-redux";

const App = () => {
  const [token] = useToken();
  const { modal } = useSelector((state) => state.modal);

  return (
    <div>
      <BrowserRouter>
        {token?.token && <Navbar />}
        {modal && <Modal />}
        <Routes>
          <Route
            path="/"
            element={!token?.token ? <Navigate to="/auth" replace /> : <Home />}
          />
          <Route
            path="/auth"
            element={token?.token ? <Navigate to="/" replace /> : <Auth />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
