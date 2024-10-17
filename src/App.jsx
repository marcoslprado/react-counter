import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./views/Home.jsx";
import Contact from "./views/Contact.jsx";

export default function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/contact" Component={Contact}/>
      </Routes>
    </Router>
  )
}