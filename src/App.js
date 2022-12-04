import React from 'react';
import Navs from './Components/Navs/Navs';
import { Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Attendance from './Components/Attendance/Attendance'
import Login from './Components/Login/Login'
import SingUp from './Components/SignUp/Signup'
import StepTwo from './Components/SignUp/StepTwo/StepTwo';
import StepThree from './Components/SignUp/StepThree/StepThree';
import StepOne from './Components/SignUp/stepOne'
const App = () => {
  return (
    <div>
      <Navs/>

      <Routes>
        <Route path="/" element={<Home/>} />
       <Route path="/home" element={<Home/>} />
       <Route path="/about" element={<About />} />
       
       <Route path="/attendance" element={<Attendance />} />
       <Route path="/signup" element={<SingUp />}> </Route>
       <Route path="/nextStepOne" element={<StepOne />} />
       <Route path="/nextStepTwo" element={<StepTwo/>} />
       <Route path="/nextStepThree" element={<StepThree />} />
       <Route path="/login" element={<Login />} />
  
       
   </Routes>
    </div>
  );
};

export default App;