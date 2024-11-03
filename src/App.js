import Home from './page/Home';
import Navbar from './component/Navbar';
import Product from './page/Product';
import Contact from './page/Contact';
import NoPage from './page/NoPage';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="products" element={<Product />}/>
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
