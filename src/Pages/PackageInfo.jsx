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
            <h1>Step 4</h1>
            <h2>Select Package</h2>
            <div className='packageoptions'>
                <div className='optionC' style={pack === 'Option A'? {borderTop:'15px solid rgb(255,131,79)'}: null}>
                    <h3>Option A</h3>
                    <div className='transactioncom'>
                    <h3>20%</h3>
                    <p>Transactional Commission Rate</p>
                    </div>
                    <div className='packagechoicebtn'>
                    <small>*Tasweiq will provide you with up to 10,000AED in monthly ads as a barter at a premium commission rate of 20%.</small>
                    
                    <button onClick={()=> setPack('Option A')} style={pack === 'Option A'?{ background: 'rgb(255,131,79)', color: 'white', border: '2px solid rgb(255,131,79)'}:null}>{pack === 'Option A'? selected:'select'}</button></div>
                </div>
                <div className='optionC' style={pack === 'Option B'? {borderTop:'15px solid rgb(255,131,79)'}: null}>
                <h3>Option B</h3>
                <div className='transactioncom'>
                <h3>15%</h3>
                <p>Transactional Commission Rate</p>
                </div>
                <div className='packagechoicebtn'>
                <small>*Industry standard</small>
                
                <button  onClick={()=> setPack('Option B')} style={pack === 'Option B'?{ background: 'rgb(255,131,79)', color: 'white' , border: '2px solid rgb(255,131,79)'}:null}>{pack === 'Option B'? selected:'select'}</button>
                </div>
                </div>
                <div className='optionC' style={pack === 'Option C'? {borderTop:'15px solid rgb(255,131,79)'}: null}>
                <h3>Option C</h3>
                <div className='transactioncom'>
                <h3>10%</h3>
                <p>Transactional Commission Rate</p>
                    </div>
                    <div className='packagechoicebtn'>
                    <small>*Tasweiq will provide you with up to 10,000AED in monthly ads as a barter at a premium commission rate of 10%.</small>
                    
                    <button  onClick={()=> setPack('Option C')} style={pack === 'Option C'?{ background: 'rgb(255,131,79)', color: 'white' , border: '2px solid rgb(255,131,79)'}:null}>{pack === 'Option C'? selected:'select'}</button>
                    </div>
                </div>
            </div>
            <Link to='/PersonalInfo' className='CompanyLocSubmit' >Continue ►</Link>

            </div>
            </div>
    )
}

export default PackageInfo;