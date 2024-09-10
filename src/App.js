import React, { useState } from "react";
import { i18n } from "./i18n";
import Layout from "./components/Layout";

import styled from "styled-components";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [language, setLanguage] = useState("en");
  const handleOnclick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <CommonStyles language={language}>
      <div className="App">
        <Layout handleOnclick={handleOnclick} />
        <ToastContainer rtl={language === "en" ? true : false} />
      </div>
    </CommonStyles>
  );
};

export default App;

const CommonStyles = styled.div`
  direction: ${(props) => (props.language === "en" ? "RTL" : "")};

  .nav,
  .menuTM,
  .home h1,
  .btns {
    direction: ltr !important;
  }

  .nav,
  .home,
  .aboutme,
  .resume,
  .portfolio,
  .contact,
  form input,
  form textarea,
  form button {
    
    font-family: ${(props) =>
      props.language === "en" ? "'Poppins', sans-serif" : ""};

    
  }

  .education ul,
  .languages ul {
    border-left: ${(props) =>
      props.language === "en" ? "none" : "1px solid #47a3da"};
    border-right: ${(props) =>
      props.language === "en" ? "1px solid #47a3da" : ""};
  }

  .education ul li::after,
  .languages ul li::after {
    content: "";
    display: block;
    left: ${(props) => (props.language === "en" ? "0" : "")};
    right: ${(props) => (props.language === "en" ? "-5px" : "")};
  }
`;
