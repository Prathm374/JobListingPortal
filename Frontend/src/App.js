import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/Main.jsx';
// import AboutPage from './pages/AboutPage.jsx';
// import Whoop404 from './pages/Whoop404.jsx';
// import ServicesPage from './pages/ServicesPage.jsx';
// import ContactPage from './pages/ContactPage.jsx';
import LoginPage from './pages/Login.jsx';
// import SignupPage from './pages/SignupPage.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoginPage />} />
          {/* <Route path='/signup' element={<SignupPage />} /> */}
          <Route path='/home' element={<MainPage />} />
          {/* <Route path='/about' element={<AboutPage />} />
          <Route path='/service' element={<ServicesPage />} />    
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<Whoop404 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
