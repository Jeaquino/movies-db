import "./assets/css/app.css";
import ContentWrapper from "./components/ContentWrapper";
import SideBar from "./components/SideBar";
import { Routes, Route } from "react-router-dom";
import TableMovies from "./Pages/TableMovies";
import MovieDetail from "./Pages/Movies/MovieDetail";
import MovieFormCreate from "./Pages/Movies/MovieFormCreate";
import UserContext from "./context/UserContext";
import { useContext } from "react";
import Login from "./Pages/Login";

function App() {
  const { userData,login } = useContext(UserContext);
  const { logged, modo} = userData;


  return (
    <>
      <div id="wrapper">
        {!logged ? (
          <>
            <Login setLogin={login}/>
          </>
        ) : (
          <>
            <SideBar />
            <Routes>
              <Route path="/" element={<ContentWrapper theme={modo}/>} />
              <Route path="/Pages" element={<h1>Page</h1>} />
              <Route path="/Charts" element={<h1>Charts</h1>} />
              <Route path="/Tables" element={<TableMovies />} />
              <Route path="/Tables/DetailMovie/:id" element={<MovieDetail />} />
              <Route path="/Tables/CreateMovie" element={<MovieFormCreate />} />
              <Route path="/Tables/EditMovie/:id" element={<h1>Edit</h1>} />
            </Routes>
          </>
        )}
      </div>
    </>
  );
}

export default App;
