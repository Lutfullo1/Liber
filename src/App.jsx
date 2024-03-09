import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { ProductDetail } from "./pages/product-detail/product-detail";
import { Profile } from "./profile/profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<ProductDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route />
      </Routes>
    </Router>
  );
}

export default App;
