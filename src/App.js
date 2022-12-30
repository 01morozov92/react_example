import "./styles/App.css"
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import NotFound from "./pages/NotFound";
import MainPage from "./pages/MainPage";

function App() {

    return (
        <Routes>
            <Route path='*' element={<NotFound/>} />
            <Route path="/" element={<MainPage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/posts" element={<Posts/>}/>
        </Routes>
    );
}

export default App;
