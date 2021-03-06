import React from 'react';
import { useForm } from "react-hook-form";
import logo from '../Pictures/SignIn/logo-org-blk-side.png'
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { PersonalContext } from '../components/FormContext';

const PersonalInfo = () => {

    const [personal,setPersonal] = useContext(PersonalContext)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => setPersonal(data);
   

    return(
        <div className= "loginPage">
             
              
        <img className="loginPage-img" src={logo}/>
        <div className='slide4'>
        <form onSubmit={handleSubmit(onSubmit)}>
           <h1>Step 5</h1>
           <h2>Personal Information</h2>
           <div className='touchpoint2'>
           <div className='infoform'>
             <p>First Name:</p>
             <input type='text' name="firstname" ref={register({required: true, maxLength: 80})}></input>
           </div> 
           <div className='infoform'>
             <p>Email:</p>
             <input type='text' name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})}></input>
           </div>
           </div>
           <div className='touchpoint2'>
           <div className='infoform'>
             <p>Last Name:</p>
             <input type='text' name="lastname" ref={register({required: true, maxLength: 80})}></input>
           </div>
           <div className='infoform'>
             <p>Phone:</p>
             <input type='text' name="phone" ref={register({required: true, minLength: 6, maxLength: 12})} ></input>
           </div>
              <input type="submit" value= "Save"/>
           </div>
           </form>
           <div className='reviewandsub-sec2'>
           <small>*Please note that all product purchases will be sent as an email and text so please ensure that the above details are correct.</small>
           <Link to='/formDetails' className='CompanyLocSubmit' >Review and Submit ►</Link>
          </div>
         </div>
         </div>
    );
}

export default PersonalInfo 