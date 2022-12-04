import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import './StudentData.css'
const StudentData = (props) => {

    const {Date,Name,Email,Status,TtD,TtN,TtE,TtS} = props.All

return (
    <div>
        <Container>
        <div   className='row'>
            
        <div className='col-md-3 col-xl-3 col text-center p-2'>
               <h4><b> {TtD}</b></h4>
               <p> {Date}</p>
               
           </div>

           <div className='col-md-3 col-xl-3 text-center '>
              <h4><b> {TtN}</b></h4>

               <p> {Name}</p>
               
           </div>

           <div className='col-md-3 col-xl-3  text-center '>
           <h4><b> {TtE}</b></h4>

               <p> {Email}</p>
               
           </div>

           <div className='col-md-3 col-xl-3  text-center '>
           <h4><b> {TtS}</b></h4>

               <p> {Status}</p>
          
           </div>
        </div>

        </Container>
    </div>
    );
};

export default StudentData;