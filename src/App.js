import React from 'react';
import logo from './logo.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
// React Router Import
import { Switch, Route } from 'react-router-dom';
// Import Pages for React Router
import Home from './components/pages/Home';
import Layout from './components/pages/Layout';
import Locations from './components/pages/Locations';
import Preparation from './components/pages/Preparation';
import NotFoundPage from './components/pages/NotFoundPage';
import Details from './components/pages/Details';

function App() {
  return (
    <div>
      <Navbar /> 
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/layout" component={Layout}/>
        <Route path="/locations" component={Locations}/>
        <Route path="/preparation" component={Preparation}/>
        <Route path="/details" component={Details} />
        <Route component={NotFoundPage}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

// notes:

// Using react router. run command npm install react-router-dom
// remember react router is going to help route between the components

// <Route exact path="/" component={Home}/> using exact will make it the default page.

// not giving <Route component={NotFoundPage}/> a path will make it to where if it has the wrong url if will automatically go to the NotFoundPage route.