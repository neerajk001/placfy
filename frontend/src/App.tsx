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
        <div style={{ position: 'relative', minHeight: '100vh' }}>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/grid.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(0.5px)',
            zIndex: -2
          }}></div>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #FFFFFF, #F0F0F0)',
            opacity: 0.7,
            zIndex: -1
          }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <SiteNavbar/>
            <Hero/>
            <Features/>
            <HowtsWorks/>
            <Testimonials/>
            <Pricing/>
            <CtaBanner/>
            <SiteFooter/>
          </div>
        </div>
      } />
      
      {/* HR Landing Page */}
      <Route path="/hr" element={
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/grid.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(0.5px)',
            zIndex: -2
          }}></div>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #FFFFFF, #F0F0F0)',
            opacity: 0.7,
            zIndex: -1
          }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <SiteNavbar/>
            <HRLanding/>
            <SiteFooter/>
          </div>
        </div>
      } />
      
      {/* Recruiter Landing Page */}
      <Route path="/recruiter" element={
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(/grid.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(0.5px)',
            zIndex: -2
          }}></div>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #FFFFFF, #F0F0F0)',
            opacity: 0.7,
            zIndex: -1
          }}></div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <SiteNavbar/>
            <RecruiterLanding/>
            <SiteFooter/>
          </div>
        </div>
      } />
      
      {/* Admin Routes */}
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  );
};

export default App;

