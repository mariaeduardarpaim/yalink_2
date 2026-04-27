import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeV2 from "@/pages/HomeV2";
import Home from "@/pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeV2 />} />
        <Route path="/v1" element={<Home />} />
      </Routes>
    </Router>
  );
}
