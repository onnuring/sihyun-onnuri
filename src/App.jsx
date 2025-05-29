import Home from "./sections/Home";
import WeddingCalendar from "./sections/WeddingCalendar";
import Location from "./sections/Location";
import Gallery from "./sections/Gallery";
import Information from "./sections/Information";
import Account from "./sections/Account";
import Footer from "./sections/Footer";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import { AnimatePresence, motion } from "framer-motion";
import PreloadAssets from "./util/PreloadAssets";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) return;

    // 카카오 초기화
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
    }
  }, [loading]);

  return (
    <>
      {!loading && <PreloadAssets onReady={() => setLoading(true)} />}
      <AnimatePresence mode="wait">
        {!loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Loading />
          </motion.div>
        ) : (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Home />
            <WeddingCalendar />
            <Location />
            <Gallery />
            <Information />
            <Account />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
