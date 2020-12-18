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

    const [params1,setparams] = useState({
        company: '',
        countries: {}
    }); 
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
          <TextField value={params1} onSelect={(e)=>setparams({[e.target.name]:e.target.value})}
          onChange={console.log(params1)}
            {...params}
            variant="outlined" name='company' />
        )}
      /> </div>
      
        </div>
        {params1.company === 'Other' || params1.company === 'other' ? 
        <div className='textfieldOther'>
      <p>Please Specify:</p>
      <TextField className='textfieldothertext' variant='outlined' name='company'  /></div>
    : null}
        <div className='operation'>
        <p>Countries of operation:</p>
        <Autocomplete name='countries'
        multiple
        onSelect={(e)=>setparams({[e.target.name]:e.target.value})}
        id="tags-outlined"
        options={countries}
        filterSelectedOptions = {false}
        renderInput={(params) => (
          <TextField
          
            {...params}
            variant="outlined" name='countries'  />
        )}
      /></div>
     <Link to='/touchPoints'> <button className='CompanyLocSubmit' >Continue ►</button></Link>
      
     
    </div>
            
        
        
      
    );
}

export default CompanyInfo