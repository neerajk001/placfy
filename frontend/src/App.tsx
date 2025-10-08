import { Routes, Route } from 'react-router-dom';
import SiteNavbar from './components/SiteNavbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowtsWorks from './components/HowtsWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CtaBanner from './components/CtaBanner';
import SiteFooter from './components/SiteFooter';
import AdminRoutes from './routes/AdminRoutes';


const App = () => {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={
        <div className='h-screen'>
          <SiteNavbar/>
          <Hero/>
          <Features/>
          <HowtsWorks/>
          <Testimonials/>
          <Pricing/>
          <CtaBanner/>
          <SiteFooter/>
        </div>
      } />
      
      {/* Admin Routes */}
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
};

export default App;

