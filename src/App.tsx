import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Game from "./components/Game";
import React, { useEffect } from "react";
import { useSettings } from "./hooks/useSettings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageContainer from "./components/PageContainer";
import Snowfall from 'react-snowfall'

function App() {
  const [{ theme }] = useSettings();

  useEffect(() => {
    if (theme === "dark") {
      // This has to be on the document due to modals/panels
      //  being injected outside the PageContainer
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <PageContainer>
      <Snowfall />
      <ToastContainer
        hideProgressBar
        position="top-center"
        transition={Flip}
        theme={theme}
        autoClose={2000}
        bodyClassName="font-bold text-center"
      />
      <Navbar />
      <Game />
      <Footer />
    </PageContainer>
  );
}

export default App;
