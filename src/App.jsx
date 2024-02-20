import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Recipe from "./components/Recipe";
import Error from "./components/Error";
import Category from "./components/Category";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategorySection from "./components/CategorySection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategorySection />
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />
        {/* Category page */}
        <Route path="/category" element={<Category />} />
        {/* Recipe Page */}
        <Route path="/recipe/:id" element={<Recipe />} />
        {/* Error page */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
