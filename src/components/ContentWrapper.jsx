import ContentRowTop from "./ContentRowTop";
import TopBar from "./TopBar";
import Footer from "./Footer";
import PropTypes from "prop-types";
import "../assets/css/ContentWrapper.css";

export default function ContentWrapper({theme}) {
  
  console.log("theme",theme);
  
  const style = theme === "dark" ? "d-flex flex-column dark" : "d-flex flex-column light";
  return (
    <div id="content-wrapper" className={style}>
        <div id="content">
            <TopBar/>
            <ContentRowTop/>
        </div>
        <Footer/>
    </div>

  )
}

ContentWrapper.propTypes = {
  theme: PropTypes.string.isRequired
};
