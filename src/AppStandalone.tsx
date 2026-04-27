import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "@/pages/HomeV2";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}