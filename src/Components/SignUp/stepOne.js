import React from 'react';
import './StepOne.css'
import { Link } from 'react-router-dom';
import ImgOne from '../Img/istockphoto-1321277096-612x612 1.png'
import Button from 'react-bootstrap/esm/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
const stepOne = () => {
    return (
        <div>
            <div className='container'>
            <div className='row'>
                <div className='col-xl-7  col-md-7 col-sm-6 Imgstyle'>
                <img src={ImgOne} alt="ImgOne" />                
                </div>

                <div className='col-xl-5  col-md-5 col-sm-6'>
                 
                 <div className='boxStyle mt-3'>
                          
                 <h2 className='text-center mb-3 mt-3'>SignUp Form</h2>
    
           
    <div className='form-container mt-5'>
         <div >
             
         <form>
         <div className='input-group'>
                 <label htmlFor = 'first-name'></label>
                 <input type="text" name="name" id="" placeholder='Write First Name' required></input>

             </div>

             <div className='input-group'>
                 <label htmlFor = 'last-name'></label>
                 <input type="text" name="name" id="" placeholder='Write Last Name'required></input>

             </div>

             <div className='m-auto text-center NextStepBtn'>
             <Link to="/nextStepTwo"> <Button variant="primary"> Next Step <FontAwesomeIcon icon={faArrowRight} /></Button></Link>

             </div>
            
         </form>
         <div className='form-new text-center  text-center mt-4'>
             <small>Already have an account ? <Link to="/login" className='link-color'>LOGIN HERE!</Link></small>
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

export default stepOne;

