import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home'
import Header from './pages/Shared/Header/Header';
import Booking from './pages/Booking/Booking';
import AddService from './pages/AddService/AddService';
import Login from './pages/Login/Login';
import Register from './pages/Login/Register';
import RequireAuth from './pages/Login/RequireAuth';
import CheckOut from './pages/CheckOut/CheckOut';
import About from './pages/About/About';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/booking" element={<Booking></Booking>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/checkout" element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        } />
        <Route path="/addservice" element={<AddService></AddService>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
