import { Routes, Route } from 'react-router-dom';
import SiteNavbar from './components/SiteNavbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowtsWorks from './components/HowtsWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CtaBanner from './components/CtaBanner';
import SiteFooter from './components/SiteFooter';
import HRLanding from './components/HRLanding';
import RecruiterLanding from './components/RecruiterLanding';
import AdminRoutes from './routes/AdminRoutes';


const App = () => {
  return (
    <Routes>
      {/* Main Landing Page */}
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
      
      {/* HR Landing Page */}
      <Route path="/hr" element={
        <div>
          <SiteNavbar/>
          <HRLanding/>
          <SiteFooter/>
        </div>
      } />
      
      {/* Recruiter Landing Page */}
      <Route path="/recruiter" element={
        <div>
          <SiteNavbar/>
          <RecruiterLanding/>
          <SiteFooter/>
        </div>
      } />
      
      {/* Admin Routes */}
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
};

export default App;

