import './App.css';
import Main from "./component/main";
import Navbar from "./component/navbar";
import {BrowserRouter,Route,Routes}from "react-router-dom"
import Signup from './component/signup';
import Diary from './component/diary';
import Diet from './component/diet';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

          <Navbar/>
          <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/diet' element={<Diet/>}></Route>
            <Route path='/diary' element={<Diary/>}></Route>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;