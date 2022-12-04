import React from 'react';
import { Link } from 'react-router-dom';
import ImgOne from '../../Img/istockphoto-1321277096-612x612 1.png'
import './StepThree.css'


const StepThree = () => {
    return (
        <div>
        <div className='container'>
        <div className='row'>
            <div className='col-xl-7  col-md-7 col-sm-6'>
            <img src={ImgOne} alt="ImgOne" />                </div>

            <div className='col-xl-5  col-md-5 col-sm-6'>
             
             <div className='boxStyle mt-3'>
                      
             <h2 className='text-center mb-3 mt-3'>SignUp Form</h2>

       
<div className='form-container mt-5'>
     <div >
         
     <form>
               <div className='input-group passwordMustBe'>
                     <label htmlFor = 'password'></label>
                     <input  type="password" name="password" id="" placeholder='Write Password'required></input>
                      <p>Your password must be 8 character</p>
                 </div>

         <div className='m-auto  NextStepBtn'>
            <div className='d-flex pb-5 nextStepTwoBtn'>
            <span className='pt-1'><Link to="/nextStepTwo" >Back</Link></span>
            <input className='form-submited' type="submit" value="SignUp"></input>
            </div>

         </div>
        
     </form>
     


     </div>
     
 </div>
             </div>
          
    </div>
            </div>

        </div>
    </div>
    );
};

export default StepThree;