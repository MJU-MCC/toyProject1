import './App.css';
import Sidebar from "./component/sidebar";
import Navbar from "./component/navbar";
import {BrowserRouter,Route,Routes}from "react-router-dom"

function App() {
  return (
    <div className="App">

        <Navbar/>
        <Routes>
          <Route path='/'>
            <div className="box">
                <div className="main-contents">
                    homepage
                    info
                </div>
                <Sidebar/>
            </div>
          </Route>
        </Routes>
    </div>
  );
}

export default App;