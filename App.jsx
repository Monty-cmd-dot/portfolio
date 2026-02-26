import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import CustomCursor from "./components/CustomCursor";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      {!loading && (
        <>
          <AnimatedBackground />
          <CustomCursor />
          <Navbar />
          <div className="snap-container">
            <div className="snap-section"><Hero /></div>
            <div className="snap-section"><About /></div>
            <div className="snap-section"><Projects /></div>
            <div className="snap-section"><Footer /></div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
