import './App.css';
import Main from "./component/main";
import Navbar from "./component/navbar";
import {BrowserRouter,Route,Routes}from "react-router-dom"
import Signup from './component/signup';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

          <Navbar/>
          <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;