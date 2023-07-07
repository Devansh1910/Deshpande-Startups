import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "./style/home.css";
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView();
      }
    }
  }, [location]);

  const SectionStyle = {
    height: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <>
      <Navbar />
      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection id="section1" style={{
            backgroundColor: 'white',
            height: '100vh',
            padding: '1em',
          }}>1</FullpageSection>
          <FullpageSection id="section2" style={{
            backgroundColor: 'black',
            padding: '1em',
            height: '100vh',
          }}>2</FullpageSection>
          <FullpageSection id="section3" style={{
            backgroundColor: 'white',
            padding: '1em',
            height: '100vh',
          }}>3</FullpageSection>
          <FullpageSection id="section4" style={{
            backgroundColor: 'white',
            padding: '1em',
            height: '100vh',
          }}>4</FullpageSection>
          <FullpageSection id="section5" style={{
            backgroundColor: 'white',
            padding: '1em',
            height: '100vh',
          }}>5</FullpageSection>
          <FullpageSection id="section6" style={{
            backgroundColor: 'white',
            padding: '1em',
            height: '100vh',
          }}>6</FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
};

export default Home;
