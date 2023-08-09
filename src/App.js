import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Header from './components/Headers';
import CartDetails from './components/CartDetails';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<CartDetails />} />
      </Routes>
      
      <Toaster position='top-right' />
    </>
  );
}

export default App;
