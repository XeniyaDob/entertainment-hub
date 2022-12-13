import "./App.css";
// eslint-disable-next-line
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing/Landing";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import Container from "@mui/material/Container";
import ResponsiveAppBar from "./components/MainNav";
function App() {
  return (
    <>
      <ResponsiveAppBar />
      <div className="app">
        <Container>
          <Routes>
            <Route index exact path="/" element={<Landing />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/series" element={<Series />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Container>
      </div>
    </>
  );
}

export default App;
