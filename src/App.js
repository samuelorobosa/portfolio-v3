import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import {NavigationProvider} from "./context/NavigationContext/NavigationContext";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import './assets/font/Louis George Cafe.ttf'

function App() {
  return (
      <NavigationProvider>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
      </NavigationProvider>
  );
}

export default App;
