import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Details from './details';
import { Routes, Route, Link } from "react-router-dom";
import Nav from './nav';
function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path={"/post"} element={<Details />} />
     </Routes>
    </div>
  );
}

export default App;
