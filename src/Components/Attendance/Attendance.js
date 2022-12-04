import React, { useState } from 'react';
import './Attendance.css'
import Fakedata from '../Fakedata/Fakedata'
import StudentData from './StudentData';


const Attendance = () => {
    const [Data , setData] = useState(Fakedata)
    return (
        <div className='container'>
            <div>
                <h2 className='ContentStyle text-center mt-5 mb-5'>Attendance information</h2>

                <div> 
                   <div >
                   
                   {
                     Data.map((AllSt)=> <StudentData  All={AllSt} />)
                  }
                   </div>

                </div>

        </div>
        </div>
    );
};

export default Attendance;


