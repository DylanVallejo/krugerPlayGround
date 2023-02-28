import './App.scss';
import Navbar from './components/Navbar';
import HomePage from './components/pages/HomePage';
import AgeCalculatorPage from './components/pages/AgeCalculatorPage'; 
import MasaPage from './components/pages/MasaPage';
import ClockPage from './components/pages/ClockPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage'; 
import Footer from './components/Footer';
import StarsBackground from './components/StarsBackground'

import {Route,Routes,BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/imc'} element={<MasaPage />} />
          <Route path={'/age'} element={<AgeCalculatorPage />} />
          <Route path={'/clock'} element={<ClockPage />} />
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/contact'} element={<ContactPage />} />
        </Routes>
        {/* <StarsBackground/> */}
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
