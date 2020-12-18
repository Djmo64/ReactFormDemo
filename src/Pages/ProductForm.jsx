import React from 'react';
import { useForm } from "react-hook-form";
import logo from '../Pictures/SignIn/logo-org-blk-side.png'

import NumPad from 'react-numpad';
import countries from '../components/countries';
import CountdownTimer from "react-component-countdown-timer";
 
import { useState } from 'react'; 
import Autocomplete from '@material-ui/lab/Autocomplete';
import tvc from '../TvComp.json'
import TextField from '@material-ui/core/TextField'; 
import TVForm from '../components/TVForm';
import RadioForm from '../components/RadioForm';
import CinemaForm from '../components/CinemaForms';
import PrintForm from '../components/PrintForm'; 
import OOHForm from '../components/OOHForm';
import { FormContext, FormProvider, PragContext, PragProvider } from '../components/FormContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CompanyInfo from './companyInfo';

export default function ProductForm() {
  const { register, handleSubmit, errors } = useForm();
  const [value2, setValue2] = useState('');
  const onSubmit = data => console.log(data);
  const [forms,setForms] = useContext(FormContext);
  const [prag,setPrag] = useContext(PragContext);
  
  const handleChange2 = (value2) => {
    setValue2(Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( value2));
  };
 
    function getUnique(arr, comp) {
      // store the comparison  values in array
      const unique = arr
        .map((e) => e[comp])
  
        // store the indexes of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
  
        // eliminate the false indexes & return unique objects
        .filter((e) => arr[e])
        .map((e) => arr[e]);
  
      return unique;
    }
    const Company = getUnique(tvc, "AdvertisingOwner");
   const tv = Company.map((item,index) => {
    return item.AdvertisingOwner
    })
  return (
    
      
    <div className= "loginPage">
             
              
    <img className="loginPage-img" src={logo}/>
    
    {prag === 0?  
          <CompanyInfo/>
          : null}
          
          {prag === 6?
         <div className='slide6'>
           <h1>Congrats!</h1>
           <div className='congratsMess'>
           <p>You are officially listed onto the Tasweiq platform. A member of our team will be in touch shortly to provide you with your login information and how to access your personalized dashboard.</p>
            <p>Should you require any further assistance, do not hesitate to reach out via the below email address:</p>
            </div>
          
            <button className='CompanyLocSubmit' >partners@tasweiq.com</button>

         </div> 
         : null}
    </div>
   
    
  );
  
}


 //for other login page
 //countdown timer
//  const SingIn = () => {

//   const { register, handleSubmit, errors } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   let date = new Date('January 1, 2021 03:22:34');
  
//   let today = new Date();
//   let dd = String(today.getDate()).padStart(2, '0');
//   let mm = String(today.getMonth() + 1).padStart(2, '0'); 
//   let yyyy = today.getFullYear();

//   today = mm + '/' + dd + '/' + yyyy;
//   let today2 = new Date(today);


//   let date3 = (date.getTime() - today2.getTime())/1000;
//   console.log(date3)
//   console.log(date.getTime())
//   console.log(today2.getTime())
//   return(
//           <div className= "loginPage">
           
            
//               <img className="loginPage-img" src={logo}/>
              


              
              
          
//           <div className="countdown-sect">
//           <CountdownTimer className="coundowntimer"  count={date3} backgroundColor="lightblue" noPoints size ={80} labelSize={20} showTitle={true} border={true} responsive color="rgb(255, 131, 79)" />
//           </div>
//           <div className="sign-in-container-front-page">
//             <div className='buyer'>
//             <p>Buyer</p>
//             <input type='text' placeholder='Name'></input>
//             <input type='text' placeholder='Email'></input>
//             <div className ='privandsub'>
//             <div className='privacy'>
//               <input type='radio'></input>
//               <small>Privacy</small>
//             </div>
//             <div className='submit'>
//               <button><Link to="/supplier">Submit</Link></button>
//             </div>
//             </div>
//             <p className='signinwith'> Or sign in with:</p>
//             <button className='googlebtn'> Sign in
//             </button>
//             <button className='facebookbtn'>Sign in
//             </button>
//             </div>
//             <div className="devider"></div>
//             <div className='buyer'>
//             <p>Supplier</p>
//             <input type='text' placeholder='Name'></input>
//             <input type='text' placeholder='Email'></input>
//             <div className ='privandsub'>
//             <div className='privacy'>
//               <input type='radio'></input>
//               <small>Privacy</small>
//             </div>
//             <div className='submit'>
//               <button><Link to="/supplier">Submit</Link></button>
//             </div>
//             </div>
//             </div>
//           </div>
//             <button className='passthrough'><Link to="/LandingPage">
//             Landing Page</Link>
//           </button>
//               <div className='footer'>
//               <Footer/>
//               </div>
             
//           </div>
//   )
// }

