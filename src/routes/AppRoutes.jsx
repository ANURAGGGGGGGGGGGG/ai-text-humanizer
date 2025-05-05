import { Routes, Route, Navigate } from 'react-router-dom';
import TextHumanizer from '../components/TextHumanizer';
import Contact from "../components/Contact";

import About from '../components/About';
import PrivacyPolicy from '../components/PrivacyPolicy';
import TermsOfService from '../components/TermsOfService';
// import Home from '../components/Home';

const AppRoutes = () => {
  return (
    <Routes>

      {/* <Route path="/" element={<App />} /> */}
      {/* <Route path="/humanize" element={<TextHumanizer />} /> */}
      <Route index element={<TextHumanizer />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
      {/*<Route path="*" element={<Navigate to="/" replace/>} /> */}
    </Routes>
  );
};

export default AppRoutes;