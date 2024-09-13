
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

 import Products from './components/ProductPage';
import Partners from './components/PartnerPage';

import Investor from './components/InvestorPage';
import Register from "./components/RegisterPage";

import "./style.scss";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<LandingPage />} />

        {/* Define other routes */}
         <Route path="/products" element={<Products />} />
        <Route path="/partners" element={<Partners />} /> 
        <Route path="/investor" element={<Investor />} />
        <Route path="/register" element={<Register />} />

      </Routes>
    </Router>
  );
}

export default App;
