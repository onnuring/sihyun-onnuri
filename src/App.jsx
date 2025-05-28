import Home from "./sections/Home";
import WeddingCalendar from "./sections/WeddingCalendar";
import Location from "./sections/Location";
import Gallery from "./sections/Gallery";
import Information from "./sections/Information";
import Account from "./sections/Account";
import Footer from "./sections/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
    }
  }, []);
  return (
    <>
      <Home />
      <WeddingCalendar />
      <Location />
      <Gallery />
      <Information />
      <Account />
      <Footer />
    </>
  );
}

export default App;
