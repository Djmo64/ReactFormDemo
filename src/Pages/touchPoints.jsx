import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from 'react'; 
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TVForm from '../components/TVForm';
import RadioForm from '../components/RadioForm';
import CinemaForm from '../components/CinemaForms';
import PrintForm from '../components/PrintForm'; 
import OOHForm from '../components/OOHForm';
import logo from '../Pictures/SignIn/logo-org-blk-side.png'
import { FormContext, FormProvider, PragContext, PragProvider } from '../components/FormContext';


  
const TouchPoints = () => {

  const [prag,setPrag] = useContext(PragContext);
  const [params1,setparams] = useState('');
  const [selected1,setselected1] = useState(false);
  const [selected2,setselected2] = useState(false);
  const [selected3,setselected3] = useState(false);
  const [selected4,setselected4] = useState(false);
  const [selected5,setselected5] = useState(false);
  const [selected6,setselected6] = useState(false);

  return(
<div className= "loginPage">
             
              
             <img className="loginPage-img" src={logo}/>
 {prag === 0?
    <div className='slide2'>
      <h1>Step 2</h1>
      <h2>Select the type of touch point you would like to enlist:</h2>
      <small>(please note you are able to select more than one option)</small>
      <div className='touchpoint1'>
        <button onClick={()=>setselected1(!selected1)}style={selected1 === true ? { background: 'rgb(255,131,79)', color: 'white'} :  { background: 'transparent', color: 'black'}}>TV</button>
        <button onClick={()=>setselected2(!selected2)} style={selected2 === true ? {fontSize: '14px', background: 'rgb(255,131,79)', color: 'white'} :  { fontSize: '14px',background: 'transparent', color: 'black'}}>FREELANCE PRODUCTION</button>
      </div>
      <div className='touchpoint1'>
        <button onClick={()=>setselected3(!selected3)} style={selected3 === true ? { background: 'rgb(255,131,79)', color: 'white'} :  { background: 'transparent', color: 'black'}}>RADIO</button>
        <button onClick={()=>setselected4(!selected4)}style={selected4 === true ? { background: 'rgb(255,131,79)', color: 'white'} :  { background: 'transparent', color: 'black'}}>CINEMA</button>
      </div>
      <div className='touchpoint1'>
        <button onClick={()=>setselected5(!selected5)}style={selected5 === true ? { background: 'rgb(255,131,79)', color: 'white'} :  { background: 'transparent', color: 'black'}}>PRINT</button>
        <button onClick={()=>setselected6(!selected6)}style={selected6 === true ? { background: 'rgb(255,131,79)', color: 'white'} :  { background: 'transparent', color: 'black'}}>OOH</button>
      </div>
      <button className='CompanyLocSubmit' onClick={()=> setPrag(prag+1)}>Continue ►</button>
    </div>
    :null}
  {prag === 1?
  <div className='slide3'>
    <h1>Step 3</h1>
      {selected1 === true ? 
    <div className='tvform2'>
        <TVForm/>
    </div> : null }
    {selected2 === true ? 
    <div className='Productform'>

    </div> : null }
    {selected3 === true ? 
    <div className='Radioform'>
      <RadioForm/>
    </div> : null }
    {selected4 === true ? 
    <div className='cinemaform'>
      <CinemaForm/>
    </div> : null }
    {selected5 === true ? 
    <div className='printform'>
      <PrintForm/>
    </div> : null }
    {selected6 === true ? 
    <div className='oohform'>
      <OOHForm/>
    </div> : null }
    <Link to='/PackageInfo' className='CompanyLocSubmit' >Continue ►</Link>

  </div>
   : null
}
</div>)
}

export default TouchPoints