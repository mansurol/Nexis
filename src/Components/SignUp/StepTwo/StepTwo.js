import React from 'react';
import './StepTwo.css'
import { Link } from 'react-router-dom';
import ImgOne from '../../Img/istockphoto-1321277096-612x612 1.png'
import Button from 'react-bootstrap/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
const StepTwo = () => {
    return (
        <div>
        <div className='container'>
        <div className='row'>
            <div className='col-xl-7  col-md-7 col-sm-6 Imgstyle'>
            <img src={ImgOne} alt="ImgOne" />                </div>

            <div className='col-xl-5  col-md-5 col-sm-6'>
             
             <div className='boxStyle mt-3'>
                      
             <h2 className='text-center mb-3 mt-3'>SignUp Form</h2>

       
<div className='form-container mt-5'>
     <div >
         
     <form>
     <div className='input-group'>
                     <label htmlFor = 'phone'></label>
                     <input  type="text" name="Phone"id="" placeholder='+880  1xxxxxxxxxx'required></input>

                 </div>

                 <div className='input-group'>
                     <label htmlFor = 'email'></label>
                     <input  type="email" name="email" id="" placeholder='white your Email' required></input>

                 </div>

         <div className='m-auto  NextStepBtn'>
            <div className='d-flex  nextStepTwoBtn'>
            <span className='pt-1'><Link to="/nextStepOne" >Back</Link></span>
            <Link to="/nextStepThree"> <Button variant="primary"> Next Step <FontAwesomeIcon icon={faArrowRight} /></Button></Link>
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

export default StepTwo;