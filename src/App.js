import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scroller from './components/Scroller';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import Home from './routes/Home';
import Design from './routes/Design';
import About from './routes/About';
import Locations from './routes/Locations';
import Contact from './routes/Contact';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Scroller />
      <Header logoColor="dark" cover={false} />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="web-design" element={<Design />} />
          <Route path="app-design" element={<Design />} />
          <Route path="graphic-design" element={<Design />} />
          <Route path="about" element={<About />} />
          <Route path="locations" element={<Locations />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<div>This page doesn't exist!</div>} />
        </Route>
      </Routes>
      <Footer logoColor="light" />
    </BrowserRouter>
  );
};

export default App;
