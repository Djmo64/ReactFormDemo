import React from 'react';
import { useForm } from "react-hook-form";
import { CompanyContext, FormContext, FormContext2, FormContext3, FormContext4,FormContext5,FormContext6, FormProvider, PackageContext, PersonalContext, PragContext, PragProvider } from '../components/FormContext';
import logo from '../Pictures/SignIn/logo-org-blk-side.png'
import { useContext } from 'react';
import {Link} from 'react-router-dom'

const FormDetails = () => {


    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    const [forms,setForms] = useContext(FormContext);
    const [forms2,setForms2] = useContext(FormContext2);
    const [forms3,setForms3] = useContext(FormContext3);
    const [forms4,setForms4] = useContext(FormContext4);
    const [forms5,setForms5] = useContext(FormContext5);
    const [forms6,setForms6] = useContext(FormContext6);
    const [personal, setPersonal] = useContext(PersonalContext);
    const [company, setCompany] = useContext(CompanyContext); 
    const [pack,setPack] = useContext(PackageContext);
        

    const [prag,setPrag] = useContext(PragContext);

    return(
        <div className= "loginPage">
             
             
        <img className="loginPage-img" src={logo}/>
        <div className='slide5'>
           <h1>Please Review and Submit</h1>
           <div className='detailscontainer'>
            <div className='personaldetails'>
                <h2 className='formtitle'>Personal Info:</h2>
                <div className='personalcontent'>
                  <h3>{"Name:"+ personal.firstname +" " + personal.lastname}</h3>
                  <h3>Email: {personal.email}</h3>
                  <h3>Phone: {personal.phone}</h3>
                  </div>
              </div>
              <div className='personaldetails'>
                <h2 className='formtitle'>Company Info:</h2>
                <div className='personalcontent'>
                  <h3>{"Company:"+ company}</h3>
                  <h3>{"Package: " + pack}</h3>
                  
                 </div>
                  </div>
              </div>
           <div className='ListedProducts'>
             <h2 className='ListedProducts-title'>Listed Products:</h2>
            <div className='ListedProducts-sub'>
             {forms.items.length > 0 ?
         <div>
             <h2 className="formtitle">TV </h2>
             {forms.items.map((form,index)=>{
                 const ind = index+1;
                
                 return(
                     <div className='prodcont' key={index}>
                     <h2>{'Product '+ ind + ': '}</h2> 
                      {console.log(form.TVChannelName)}
                 <p className='prorev'>TV Channel Name: {form.TVChannelName}</p>
                 <p className='prorev'>Number of Viewers: {form.NumberofViewers}</p>
                 <p className='prorev'>Frequency: {form.Frequency}</p>
                 <p className='prorev'>Channel Description: {form.ChannelDescription}</p>
                 <p className='prorev'>Language: {form.Language}</p>
                 <p className='prorev'>Location Aired: {form.LocationAired}</p>
                 <p className='prorev'>Time Slot: {form.TimeSlot1}</p>
                 <p className='prorev'>Price: {form.Price}</p>
                 <p className='prorev'>Ad Spot: {form.AdSpot}</p>
                 
                 </div>
                 )
             })}</div>: null}
            
            {forms2.items.length > 0 ?
         <div>
             <h2 className="formtitle">Cinema</h2>
             {forms2.items.map((form,index)=>{
                 const ind = index+1;
                
                 return(
                     <div className='prodcont' key={index}>
                     <h2>{'Product '+ ind + ': '}</h2> 
                      {console.log(form.TVChannelName)}
                 <p className='prorev'>TV Channel Name: {form.TVChannelName}</p>
                 <p className='prorev'>Number of Viewers: {form.NumberofViewers}</p>
                 <p className='prorev'>Frequency: {form.Frequency}</p>
                 <p className='prorev'>Channel Description: {form.ChannelDescription}</p>
                 <p className='prorev'>Language: {form.Language}</p>
                 <p className='prorev'>Location Aired: {form.LocationAired}</p>
                 <p className='prorev'>Time Slot: {form.TimeSlot1}</p>
                 <p className='prorev'>Price: {form.Price}</p>
                 <p className='prorev'>Ad Spot: {form.AdSpot}</p>
                 
                 </div>
                 )
             })}</div> : null}
   
             {/*   {forms3.items.length > 0 ?
         <div>
             <h2 className="formtitle">Out of Home</h2>
             {forms3.items.map((form,index)=>{
                 const ind = index+1;
                
                 return(
                     <div className='prodcont' key={index}>
                     <h2>{'Product '+ ind + ': '}</h2> 
                      {console.log(form.TVChannelName)}
                 <p className='prorev'>TV Channel Name: {form.TVChannelName}</p>
                 <p className='prorev'>Number of Viewers: {form.NumberofViewers}</p>
                 <p className='prorev'>Frequency: {form.Frequency}</p>
                 <p className='prorev'>Channel Description: {form.ChannelDescription}</p>
                 <p className='prorev'>Language: {form.Language}</p>
                 <p className='prorev'>Location Aired: {form.LocationAired}</p>
                 <p className='prorev'>Time Slot: {form.TimeSlot1}</p>
                 <p className='prorev'>Price: {form.Price}</p>
                 <p className='prorev'>Ad Spot: {form.AdSpot}</p>
                 
                 </div>
                 )
             })}</div>
             : null}
             {forms4.items.length > 0 ?
         <div>
             <h2 className="formtitle">Print</h2>
             {forms4.items.map((form,index)=>{
                 const ind = index+1;
                
                 return(
                     <div className='prodcont' key={index}>
                     <h2>{'Product '+ ind + ': '}</h2> 
                      {console.log(form.TVChannelName)}
                 <p className='prorev'>TV Channel Name: {form.TVChannelName}</p>
                 <p className='prorev'>Number of Viewers: {form.NumberofViewers}</p>
                 <p className='prorev'>Frequency: {form.Frequency}</p>
                 <p className='prorev'>Channel Description: {form.ChannelDescription}</p>
                 <p className='prorev'>Language: {form.Language}</p>
                 <p className='prorev'>Location Aired: {form.LocationAired}</p>
                 <p className='prorev'>Time Slot: {form.TimeSlot1}</p>
                 <p className='prorev'>Price: {form.Price}</p>
                 <p className='prorev'>Ad Spot: {form.AdSpot}</p>
                 
                 </div>
                 )
             })}</div>
             : null}
             {forms5.items.length > 0 ?
         <div>
             <h2 className="formtitle">Radio</h2>
             {forms5.items.map((form,index)=>{
                 const ind = index+1;
                
                 return(
                     <div className='prodcont' key={index}>
                     <h2>{'Product '+ ind + ': '}</h2> 
                      {console.log(form.TVChannelName)}
                 <p className='prorev'>TV Channel Name: {form.TVChannelName}</p>
                 <p className='prorev'>Number of Viewers: {form.NumberofViewers}</p>
                 <p className='prorev'>Frequency: {form.Frequency}</p>
                 <p className='prorev'>Channel Description: {form.ChannelDescription}</p>
                 <p className='prorev'>Language: {form.Language}</p>
                 <p className='prorev'>Location Aired: {form.LocationAired}</p>
                 <p className='prorev'>Time Slot: {form.TimeSlot1}</p>
                 <p className='prorev'>Price: {form.Price}</p>
                 <p className='prorev'>Ad Spot: {form.AdSpot}</p>
                 
                 </div>
                 )
             })}</div>
             : null}
             {forms6.items.length > 0 ?
         <div>
             <h2 className="formtitle">Cinema</h2>
             {forms6.items.map((form,index)=>{
                 const ind = index+1;
                
                 return(
                     <div className='prodcont' key={index}>
                     <h2>{'Product '+ ind + ': '}</h2> 
                      {console.log(form.TVChannelName)}
                 <p className='prorev'>TV Channel Name: {form.TVChannelName}</p>
                 <p className='prorev'>Number of Viewers: {form.NumberofViewers}</p>
                 <p className='prorev'>Frequency: {form.Frequency}</p>
                 <p className='prorev'>Channel Description: {form.ChannelDescription}</p>
                 <p className='prorev'>Language: {form.Language}</p>
                 <p className='prorev'>Location Aired: {form.LocationAired}</p>
                 <p className='prorev'>Time Slot: {form.TimeSlot1}</p>
                 <p className='prorev'>Price: {form.Price}</p>
                 <p className='prorev'>Ad Spot: {form.AdSpot}</p>
                 
                 </div>
                 )
             })}</div>
             : null} */}
             
             {console.log(forms[0])}
          </div></div>
          <div className="agreementComplete">
            <input type='radio'></input>
            <p>The information I provided is accurate and complete. Checking submit means you have read and agreed to our terms of service.</p>
          </div>
          <Link to='/' className='CompanyLocSubmit' onClick={()=> setPrag(6)}>Submit</Link>
         </div> 
         </div>
    );
}

export default FormDetails