import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import {NavigationProvider} from "./context/NavigationContext/NavigationContext";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Error from "./pages/Error";
import './assets/font/Louis George Cafe.ttf'
import Blog from "./pages/Blog";
import {BlogContextProvider} from "./context/BlogContext/BlogContext";
import ViewPost from "./pages/ViewPost";




function App() {
  return (
      <BlogContextProvider>
          <NavigationProvider>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/projects" element={<Projects/>}/>
                        <Route path="/resume" element={<Resume/>}/>
                        <Route path="/blog" element={<Blog/>}/>
                        <Route path="/view-post/:id" element={<ViewPost/>}/>
                        <Route path="/*" element={<Error/>}/>
                    </Routes>
                </BrowserRouter>
          </NavigationProvider>
      </BlogContextProvider>
  );
}

export default App;
