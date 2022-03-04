import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scroller from './components/Scroller';
import Header from './layout/Header';
import Main from './layout/Main';
import Footer from './layout/Footer';
import Home from './routes/Home';
import './App.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Scroller />
      <Header logoColor="dark" cover={false} />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="" element={<Home />} />
          <Route path="web-design" element={<div>Web-design page</div>} />
          <Route path="app-design" element={<div>App-design page</div>} />
          <Route
            path="graphic-design"
            element={<div>Graphic-design page</div>}
          />
          <Route path="about" element={<div>Our company page</div>} />
          <Route path="locations" element={<div>Locations page</div>} />
          <Route path="contact" element={<div>Contact page</div>} />
          <Route path="*" element={<div>This page doesn't exist!</div>} />
        </Route>
      </Routes>
      <Footer logoColor="light" />
    </BrowserRouter>
  );
};

export default App;
