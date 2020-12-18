import React, { useContext, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FormContext, FormContext4, PragContext } from './FormContext';


export default function PrintForm() {
  const { register, handleSubmit,control, errors } = useForm();
  const {fields, append, remove } = useFieldArray({control, name: "items"})
  const [forms4,setForms4] = useContext(FormContext4);
  const [prag,setPrag] = useContext(PragContext);
  
  console.log(errors);
  


  const onSubmit = data => { 
    setForms4(data)
    console.log(forms4)
}
 
  return (
    <div className="form">
      <h2>Print Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map(({id}, index)=> {
        return(
          
      <div className='tvform' key={id}>
      <div  className= 'touchpoint1'>
      <div className= 'touchpoint1-sub' >
        <p>Channel:</p>
    <input type="text" placeholder="Name here..." name={`items[${index}].TVChannelName`} ref={register} />
    </div>
    <div className= 'touchpoint1-sub' >
      <p>Number of Viewers</p>
    <input type="text" placeholder="Viewer number..." name={`items[${index}].NumberofViewers`} ref={register} />
    </div></div>
    <div className= 'touchpoint1'>
      <div className= 'touchpoint1-sub' >
        <p>Frequency:</p>
    <select name={`items[${index}].Frequency`} ref={register}>
      <option value="Day">Day</option>
      <option value=" Week"> Week</option>
      <option value=" Bi-Week"> Bi-Week</option>
      <option value=" Month"> Month</option>
      <option value=" 3 Month"> 3 Month</option>
      <option value=" 6 Month"> 6 Month</option>
      <option value=" 1 Year"> 1 Year</option>
    </select></div>
    <div className= 'touchpoint1-sub' >
    <p>Channel Description:</p>
    <textarea name={`items[${index}].ChannelDescription`} ref={register} />
    </div>
    </div>
    <div className= 'touchpoint1'>
    <div className= 'touchpoint1-sub' >
      <p>Language:</p>
    <select placeholder="Language" name={`items[${index}].Language`} ref={register}>
    <option value="English">English</option>
    <option value="Arabic">Arabic</option>
    <option value="Chinese">Chinese</option>
    <option value="Japanese">Japanese</option>
    </select></div>
    <div className= 'touchpoint1-sub' >
    <p>Location Aired:</p>
    <input type="text" placeholder="Location Aired" name={`items[${index}].LocationAired`} ref={register} />
    </div></div>
    <div className= 'touchpoint1'>
        <p>Time Slot:</p>
    <select name={`items[${index}].TimeSlot1`} ref={register}>
    <option value="1:00">1:00</option>
    <option value="1:00">2:00</option>
    <option value="1:00">3:00</option>
    <option value="1:00">4:00</option>
    <option value="1:00">5:00</option>
    <option value="1:00">6:00</option>
    <option value="1:00">7:00</option>
    <option value="1:00">8:00</option>
    <option value="1:00">9:00</option>
    <option value="1:00">10:00</option>
    <option value="1:00">11:00</option>
    <option value="1:00">12:00</option>
    <option value="1:00">13:00</option>
    <option value="1:00">14:00</option>
    <option value="1:00">15:00</option>
    <option value="1:00">16:00</option>
    <option value="1:00">17:00</option>
    <option value="1:00">18:00</option>
    <option value="1:00">19:00</option>
    <option value="1:00">20:00</option>
    <option value="1:00">21:00</option>
    <option value="1:00">22:00</option>
    <option value="1:00">23:00</option>
    <option value="1:00">24:00</option>
    </select>
    <p>Price:</p>
    <select name={`items[${index}].Price`} ref={register}>
    <option value="100AED">100</option>
    <option value="200AED">200</option>
    <option value="300AED">300</option>
    <option value="400AED">400</option>
    <option value="500AED">500</option>
    </select>
    <p>Ad Spot:</p>
    <select name={`items[${index}].AdSpot`} ref={register}>
      <option value="15 sec">15 sec</option>
      <option value=" 30 sec"> 30 sec</option>
      <option value=" 60 sec"> 60 sec</option>
      <option value=" 90 sec"> 90 sec</option>
      <option value=" 120 sec"> 120 sec</option>
    </select>
</div>
<div className= 'touchpoint1'>
<div className= 'touchpoint1-sub' >
<p>Format:</p>
<select name={`items[${index}].format`} ref={register} >
<option value=''></option>
</select></div>
<div className= 'touchpoint1-sub' >
<p>HD:</p>
<select name={`items[${index}].hd`} ref={register} >
  <option value='Yes'>Yes</option>
  <option value='No'>No</option>
</select></div>
<p>Schedule</p>
<button className='attach'>Attach Schedule</button>
</div>
    </div>
  );})}
    <div className= 'submissions'>
    <button onClick={()=>append({})}>
      Add
    </button>
    <input type="submit" value="Save"/>
    </div>
   </form> 
    </div>
  );
}