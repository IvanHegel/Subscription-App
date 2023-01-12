import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Nav";
import Articles from "./pages/Articles";
import ArticlesPlan from "./pages/ArticlesPlan";
import LandingPage from "./pages/LandingPages";
import { ProtectedRoute } from "./routes/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Articles" element={<ProtectedRoute />}>
        <Route path="/Articles" element={<Articles />} />
      </Route>
       <Route path="/Article-plans" element={<ProtectedRoute />}>
        <Route path="/Article-plans" element={< ArticlesPlan />} />
        </Route>
     </Routes>
  </BrowserRouter>
  );
}

export default App;
