import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import './StudentData.css'
const StudentData = (props) => {



const {Date,Name,Email,Status} = props.All

return (
    <div>
        <Container>
        <div   className='row'>
            
        <div className='col-md-3 col-xl-3 text-center  p-2'>
               
               <p> {Date}</p>
               
           </div>

           <div className='col-md-3 col-xl-3 text-center '>
               <p> {Name}</p>
               
           </div>

           <div className='col-md-3 col-xl-3 text-center '>
               <p> {Email}</p>
               
           </div>

           <div className='col-md-3 col-xl-3 text-center '>
               <p> {Status}</p>
          
           </div>
        </div>

        </Container>
    </div>
    );
};

export default StudentData;