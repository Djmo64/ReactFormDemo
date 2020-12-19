import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import logo from '../Pictures/SignIn/logo-org-blk-side.png'
import { useContext } from 'react';
import {Link} from 'react-router-dom'
import { CompanyContext, PersonalContext } from '../components/FormContext';
import Autocomplete from '@material-ui/lab/Autocomplete';
import tvc from '../TvComp.json'
import TextField from '@material-ui/core/TextField'; 
import countries from '../components/countries';


const CompanyInfo = () => {

    const [params1,setparams] = useState(''); 
    const [company, setCompany] = useContext(CompanyContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
       setCompany(data);
       console.log(company) 
    }

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
   

    return(
        
              <div className='slide1'>
        <h1>Step 1</h1>

      
        <div className='coName'>
          <div className='compN'>
          <p>Please Select Your Company Name: </p>
          <Autocomplete name='Cname'
        id="tags-outlined"
        options={tv}
        filterSelectedOptions = {false}
        renderInput={(params) => (
          <TextField value={params1} onSelect={(e)=>{
            setparams(e.target.value);
            setCompany(e.target.value);}}
          onChange={()=>{
            setparams(company);
            console.log(company);
          }}
            {...params}
            variant="outlined" name='company' />
        )}
      /> </div>
      
        </div>
        {params1 === 'Other' || params1 === 'other' ? 
        <div className='textfieldOther'>
      <p>Please Specify:</p>
      <TextField onChange={(e)=>setCompany(e.target.value)} className='textfieldothertext' variant='outlined' name='company'  /></div>
    : null}
        
     <Link to='/touchPoints'> <button className='CompanyLocSubmit' >Continue ►</button></Link>
      
     
    </div>
            
        
        
      
    );
}

export default CompanyInfo