import './App.css';
import Sidebar from "./component/sidebar";
import Navbar from "./component/navbar";

function App() {
  return (
    <div className="App">

        <Navbar/>
        <body>
        <div className="box">
            <div className="main-contents">
                homepage
                info
            </div>
            <Sidebar/>
        </div>
        </body>
    </div>
  );
}

export default App;