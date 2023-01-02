
import './App.scss';

// import About from './components/pages/About';
// import Contact from './components/pages/Contact';
import HomePage from './components/pages/HomePage';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Masa from './components/Masa';
// import AgeCalc from './components/AgeCalc'
// import Unmount from './components/Unmount';



import {Route,Routes,BrowserRouter} from 'react-router-dom';

function App() {
  
  const footerInfo = {
    name: "dylan",
    contact: "1234",
    mail: "kruger.com"
  } 
  
  const vaca = {
    url:'https://image.winudf.com/v2/image/dG95b3JiYWJ5LnZhY2Ffc2NyZWVuXzFfMTUwOTU4MDQ3MF8wMTg/screen-1.jpg?fakeurl=1&type=.webp',
    name:'vaca lola props',
    descripcion: 'tiene cabeza y tiene cola',
    hijo:'si'
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path={'/'} element={<HomePage />} />
            {/*
            <Route path={'/desmontar'} element={<Unmount />} />
            <Route path={'/about'} element={<About  {...vaca}/>} />
            <Route path={'/contact'} element={<Contact />} />
            <Route path={'/masa'} element={<Masa />} />
            <Route path={'/edad'} element={<AgeCalc />} /> */}
          </Routes>
        {/* <Footer  {...footerInfo} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
