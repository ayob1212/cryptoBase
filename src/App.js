import React from "react";
import Navbar from "./Components/Navbar";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./Components/HomePage";
import { Route, Routes } from "react-router-dom";
import CoinDetails from "./Components/CoinDetails";
import { Navigate } from "react-router-dom";
import Footer from "./Components/Footer";


function App() {


  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/coin" element={<HomePage />} />
        <Route path="/coin/:id" element={<CoinDetails />}>
          <Route path=":id" />
        </Route>
        <Route path="*" element={<Navigate to="/coin" replace />} />
      </Routes>
      <Footer />
    </Provider>
  );
}

export default App;
