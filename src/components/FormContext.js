import React, { useState } from 'react';



export const FormContext = React.createContext();
export const FormContext2 = React.createContext();
export const FormContext3 = React.createContext();
export const FormContext4 = React.createContext();
export const FormContext5 = React.createContext();
export const FormContext6 = React.createContext();
export const PersonalContext = React.createContext();
export const CompanyContext = React.createContext();
export const PragContext = React.createContext();

export const FormProvider = (props) => {
    const [forms, setForms] = useState(
        []
    );
   
    return(
        <FormContext.Provider value={[forms,setForms]}>
            {props.children}
        </FormContext.Provider>
    )
}
export const FormProvider2 = (props) => {
    const [forms2, setForms2] = useState(
        []
    );
   
    return(
        <FormContext2.Provider value={[forms2,setForms2]}>
            {props.children}
        </FormContext2.Provider>
    )
}
export const FormProvider3 = (props) => {
    const [forms3, setForms3] = useState(
        []
    );
   
    return(
        <FormContext3.Provider value={[forms3,setForms3]}>
            {props.children}
        </FormContext3.Provider>
    )
}
export const FormProvider4 = (props) => {
    const [forms4, setForms4] = useState(
        []
    );
   
    return(
        <FormContext4.Provider value={[forms4,setForms4]}>
            {props.children}
        </FormContext4.Provider>
    )
}
export const FormProvider5 = (props) => {
    const [forms5, setForms5] = useState(
        []
    );
   
    return(
        <FormContext5.Provider value={[forms5,setForms5]}>
            {props.children}
        </FormContext5.Provider>
    )
}
export const FormProvider6 = (props) => {
    const [forms6, setForms6] = useState(
        []
    );
   
    return(
        <FormContext6.Provider value={[forms6,setForms6]}>
            {props.children}
        </FormContext6.Provider>
    )
}

export const PragProvider = (props) => {
    const [Prag, setPrag] = useState(0);
   
    return(
        <PragContext.Provider value={[Prag,setPrag]}>
            {props.children}
        </PragContext.Provider>
    )
}
export const PersonalProvider = (props) => {
    const [person, setPerson] = useState(
        []
    );
   
    return(
        <PersonalContext.Provider value={[person,setPerson]}>
            {props.children}
        </PersonalContext.Provider>
    )
}
export const CompanyProvider = (props) => {
    const [company, setCompany] = useState(
        []
    );
   
    return(
        <CompanyContext.Provider value={[company,setCompany]}>
            {props.children}
        </CompanyContext.Provider>
    )
}