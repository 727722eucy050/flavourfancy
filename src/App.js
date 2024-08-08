import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Aboutus from './Components/Aboutus/Aboutus';
import AdminLogin from './Components/AdminLogin/AdminLogin';
import Customorder from './Components/CustomOrder/CustomOrder';
import Home from './Components/Home/Home';
import LandingPage from './Components/LandingPage/LandingPage';
import Order from './Components/Order/Order';
import Order1 from './Components/Order/Order1';
import Package from './Components/Package/Package';
import Package1 from './Components/Packges/Package1';
import Package2 from './Components/Packges/Package2';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
const App = () => {
  return (
    <Router>
      <div>
      
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/adminlogin" element={<AdminLogin/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/customorder" element={<Customorder />} />
          <Route path="/package" element={<Package/>}/>
          <Route path="/package1" element={<Package1/>}/>
          <Route path="/package2" element={<Package2/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/order1" element={<Order1/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
