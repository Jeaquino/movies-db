import "./assets/css/app.css";
import ContentWrapper from "./components/ContentWrapper";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import TableMovies from "./Pages/TableMovies";
import MovieDetail from "./Pages/Movies/MovieDetail";
import FormCreate from "./Pages/Movies/FormCreate";

function App() {
  return (
    <>
      <div id="wrapper">
        <SideBar />
        <Routes>
          <Route path="/" element={<ContentWrapper />} />
          <Route path="/Pages" element={<h1>Page</h1>} />
          <Route path="/Charts" element={<h1>Charts</h1>} />
          <Route path="/Tables" element={<TableMovies />} />
          <Route path="/Tables/DetailMovie/:id" element={<MovieDetail />} />
          <Route path="/Tables/CreateMovie" element={<FormCreate />} />
          <Route path="/Tables/EditMovie/:id" element={<h1>Edit</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
