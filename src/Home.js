import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "./style/home.css";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

const Home = () => {
  const location = useLocation();
  const scrollRef = useRef(null);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        scrollRef.current.scrollTo(element);
      }
    }
  }, [location]);

  const SectionStyle = {
    height: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleDotClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      scrollRef.current.scrollTo(element);
    }
  };

  return (
    <>
      <Navbar />
      <Fullpage ref={scrollRef}>
        <FullpageNavigation onClick={handleDotClick} />
        <FullPageSections>
          <FullpageSection
            id="section1"
            style={{
              ...SectionStyle,
              backgroundColor: "white",
              padding: "1em",
            }}
          >
            1
          </FullpageSection>
          <FullpageSection
            id="section2"
            style={{
              ...SectionStyle,
              backgroundColor: "#0D9549",
              padding: "1em",
            }}
          >
            2
          </FullpageSection>
          <FullpageSection
            id="section3"
            style={{
              ...SectionStyle,
              backgroundColor: "white",
              padding: "1em",
            }}
          >
            3
          </FullpageSection>
          <FullpageSection
            id="section4"
            style={{
              ...SectionStyle,
              backgroundColor: "white",
              padding: "1em",
            }}
          >
            4
          </FullpageSection>
          <FullpageSection
            id="section5"
            style={{
              ...SectionStyle,
              backgroundColor: "white",
              padding: "1em",
            }}
          >
            5
          </FullpageSection>
          <FullpageSection
            id="section6"
            style={{
              ...SectionStyle,
              backgroundColor: "white",
              padding: "1em",
            }}
          >
            6
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
};

export default Home;
