import "./assets/css/app.css";
import ContentWrapper from "./components/ContentWrapper";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import TableMovies from "./Pages/TableMovies";
function App() {
  return (
    <>
      <div id="wrapper">
        <SideBar />
        <Routes>
          <Route path="/" element={<ContentWrapper />} />
          <Route path="/Pages" element={<h1>Page</h1>} />
          <Route path="/Charts" element={<h1>Charts</h1>} />
          <Route path="/Tables" element={<TableMovies/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
