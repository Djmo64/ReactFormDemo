import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import logo from '../Pictures/SignIn/logo-org-blk-side.png'
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { CompanyContext, PackageContext, PersonalContext } from '../components/FormContext';


const PackageInfo = () => {
        const [pack,setPack] = useContext(PackageContext)
        const [selected] = useState('Selected!')
    return(
        <div className= "loginPage">
             
              
        <img className="loginPage-img" src={logo}/>
        <div className='packageslide'>
            <h1>Step 5</h1>
            <h2>Select Package</h2>
            <div className='packageoptions'>
                <div className='optionA'>
                    <h3>Option A</h3>
                    <div className='transactioncom'>
                    <h3>20%</h3>
                    <p>Transactional Commission Rate</p>
                    </div>
                    <div className='packagechoicebtn'>
                    <small>*Tasweiq will provide you with up to 10,000AED in monthly ads as a barter at a premium commission rate of 20%.</small>
                    
                    <button onClick={()=> setPack('Option A')} style={pack === 'Option A'?{ background: 'gray', color: 'white'}:null}>{pack === 'Option A'? selected:'select'}</button></div>
                </div>
                <div className='optionB'>
                <h3>Option B</h3>
                <div className='transactioncom'>
                <h3>15%</h3>
                <p>Transactional Commission Rate</p>
                </div>
                <div className='packagechoicebtn'>
                <small>*Industry standard</small>
                
                <button  onClick={()=> setPack('Option B')} style={pack === 'Option B'?{ background: 'rgb(255,131,79)', color: 'white'}:null}>{pack === 'Option B'? selected:'select'}</button>
                </div>
                </div>
                <div className='optionC'>
                <h3>Option C</h3>
                <div className='transactioncom'>
                <h3>10%</h3>
                <p>Transactional Commission Rate</p>
                    </div>
                    <div className='packagechoicebtn'>
                    <small>*Tasweiq will provide you with up to 10,000AED in monthly ads as a barter at a premium commission rate of 10%.</small>
                    
                    <button  onClick={()=> setPack('Option C')} style={pack === 'Option C'?{ background: '#1b3258', color: 'white'}:null}>{pack === 'Option C'? selected:'select'}</button>
                    </div>
                </div>
            </div>
            <Link to='/formDetails' className='CompanyLocSubmit' >Review and Submit ►</Link>

            </div>
            </div>
    )
}

export default PackageInfo;