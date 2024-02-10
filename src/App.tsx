import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Generation from "./pages/generation/Generation";
import Favourites from "./pages/favourites/Favoutites";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Generation />} />
            <Route path="generation" index element={<Generation />} />
            <Route path="favourites" element={<Favourites />} />
            <Route path="*" element={<Generation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
