import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import {NavigationProvider} from "./context/NavigationContext/NavigationContext";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Error from "./pages/Error";
import './assets/font/Louis George Cafe.ttf'




function App() {
  return (
      <NavigationProvider>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                    <Route path="/*" element={<Error/>}/>
                </Routes>
            </BrowserRouter>
      </NavigationProvider>
  );
}

export default App;
