import logo from './logo.svg';
import './App.css';
import Login from "./Login"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import "./styles.css";
import "./Home.css";


function App() {
  return (
    <BrowserRouter>
      <Routes>
    <Route path ="/" element={
      <Login />
    }
    />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
