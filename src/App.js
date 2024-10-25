import logo from './logo.svg';
import './App.css';
import Login from "./Login"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { connect } from "react-redux";
import "./styles.css";
import "./Home.css";
import Home from "./Home";
import { getCharacters,getLiked } from "./Redux/actions";
import React, {useEffect,useState} from "react"

function App({getCharacters}) {
  useEffect(() => {
    getCharacters();
    getLiked();
  }, []);
    return (
    <BrowserRouter>
      <Routes>
    <Route path ="/" element={
      <Login />
    }
    />
     <Route path="/home" element={
//             <Protected>
             <Home />
            // </Protected>
         } />
    </Routes>
    </BrowserRouter>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => {
      dispatch(getCharacters());
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
