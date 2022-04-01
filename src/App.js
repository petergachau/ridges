import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";

import Whatsapp from './pages/Whatsapp'
import Text from './pages/Text'


import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";

import Email from './pages/Email'
import Footer from "./components/Footer";

function App() {
  return (
    <>
   <div className="alpha-card">
  
<div className="main-card">
   
      
      
  <Router>
  <Navbar />
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
      <Route path="/text">
          <Text />
        </Route>
        <Route path="/whatsapp">
          <Whatsapp/>
        </Route>
        <Route path="/email">
          <Email/>
        </Route>
       
 
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer/>
    </Router>
 </div>
</div>
    </>
  );
}

export default App;
