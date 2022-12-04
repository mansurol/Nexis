import React from 'react';
import { Link } from 'react-router-dom';
import ImgOne from '../Img/istockphoto-1321277096-612x612 1.png'
import Button from 'react-bootstrap/esm/Button';
const Login = () => {
    return (
        <div>
        <div className='container'>
        <div className='row'>
            <div className='col-xl-7  col-md-7 col-sm-6'>
            <img src={ImgOne} alt="ImgOne" />                </div>

            <div className='col-xl-5  col-md-5 col-sm-6'>
             
             <div className='boxStyle mt-3'>
                      
             <h2 className='text-center mb-3 mt-3'>Log in Form</h2>

       
<div className='form-container mt-5'>
     <div >
         
     <form>
     <div className='input-group'>
             <label htmlFor = 'email'></label>
             <input type="email" name="email" id="" placeholder='Write Email Address' required></input>

         </div>

         <div className='input-group'>
             <label htmlFor = 'password'></label>
             <input type="password" name="password" id="" placeholder='Write Password'required></input>

         </div>

         <div className='m-auto text-center NextStepBtn'>
         <input className='form-submited' type="submit" value="Login"></input>

         </div>
        
     </form>
     <div className='form-new text-center  text-center mt-4'>
         <small>Don’t have an account? ? <Link to="/signup" className='link-color'>SIGNUP HERE!</Link></small>
     </div>
      </div> 
       </div>
        </div>
          </div>
            </div>
              </div>
               </div>
    );
};

export default Login;