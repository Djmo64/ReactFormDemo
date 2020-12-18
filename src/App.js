import logo from './logo.svg';
import './App.css';
import ProductForm from './Pages/ProductForm';

import FormDetails from './Pages/formDetails';
import PersonalInfo from './Pages/personalInfo';
import { BrowserRouter as Router, Route, Switch,Redirect, } from "react-router-dom";
import {  CompanyProvider, FormProvider, FormProvider2, FormProvider3, FormProvider4, FormProvider5, FormProvider6, PersonalProvider, PragProvider } from './components/FormContext';
import TouchPoints from './Pages/touchPoints';


function App() {
  return (
    <div className="App">
      <CompanyProvider>
      <PersonalProvider>
      <PragProvider>
      <FormProvider>
      <FormProvider2>
      <FormProvider3>
      <FormProvider4>
      <FormProvider5>
      <FormProvider6>
        <Router>
          <Switch>
          <Route exact path="/" component={ProductForm} />
          <Route exact path= "/formDetails" component={FormDetails}/>
          <Route exact path='/touchPoints' component={TouchPoints}/>
          <Route exact path= "/personalInfo" component={PersonalInfo}/>
          <Redirect to="/"/>
          </Switch>
        </Router>
        </FormProvider6>
        </FormProvider5>
        </FormProvider4>
        </FormProvider3>
        </FormProvider2>
      </FormProvider>
      </PragProvider>
      </PersonalProvider>
      </CompanyProvider>
    </div>
  );
}

export default App;
