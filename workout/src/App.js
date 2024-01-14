import './App.css';
import Sidebar from "./component/sidebar";
import Navbar from "./component/navbar";
import {BrowserRouter,Route,Routes}from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="App">

          <Navbar/>
          <Routes>
            <Route path='/' element={<Sidebar/>}></Route>
            <Route path='/signup'></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;