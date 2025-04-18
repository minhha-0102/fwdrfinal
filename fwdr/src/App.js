import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Aboutme from './pages/aboutme';
import Product from './pages/product';
import Homepage from './pages/Homepage';
import Footer from './components/footer';
import Login from './pages/login';


function App() {
  return (
    <div className="App">
        <Router>
          <Header></Header>
            <main className='content'>
              <Routes>
                <Route path="/" element={<Homepage></Homepage>}></Route>
                <Route path="/home" element={<Homepage></Homepage>}></Route>
                <Route path="/order" element={<Product></Product>}></Route>
                <Route path="/aboutme" element={<Aboutme></Aboutme>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
              </Routes>
            </main>
            <Footer></Footer>
        </Router>
    </div>
  );
}

export default App;
