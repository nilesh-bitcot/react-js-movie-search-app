import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import MovieSingle from './components/MovieSingle'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieid" element={<MovieSingle />} />
        {/* <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="moviesingle" element={<MovieSingle />}>
            <Route path=":movieid" element={<MovieSingle />} />
          </Route>
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
