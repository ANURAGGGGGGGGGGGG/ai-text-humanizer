import { Routes, Route } from 'react-router-dom';
import TextHumanizer from '../components/TextHumanizer';
import Contact from "../components/Contact";
import About from '../components/About';
import PrivacyPolicy from '../components/PrivacyPolicy';
import TermsOfService from '../components/TermsOfService';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<TextHumanizer />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfService />} />
    </Routes>
  );
};

export default AppRoutes;
