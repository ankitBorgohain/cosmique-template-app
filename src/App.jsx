import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Navbar from "./components/Navbar/Navbar";
import HoroscopeCard from "./components/HoroscopeCard";
import TempleFeed from "./components/TempleFeed";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
 
} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import PoojaList from "./pages/pooja/PoojaList";

function App() {
 
  return (
    <Provider store={store}>
    <div className="max-width-wrapper">
    
      <Router>
      <Navbar />
      <Routes>
      <Route path="/"  element={<HomePage />} />
      <Route path="/poojalist" element={<PoojaList />} />
      </Routes>
      
        
        </Router> 
    </div>
    </Provider>
  );
}

export default App;
