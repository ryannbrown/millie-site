import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container, Nav, Button, Col, Row, Card } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Navigation from "./components/Navigation/index"
// import Homepage from "./pages/Homepage/index"

import Homepage from "./pages/Homepage/index"
// import BlogPost from "./pages/BlogPost/index.js"
// import Footer from "./components/Footer/index.js"
// import Portfolio from "./components/Portfolio/index"
// import Pricing from "./components/Pricing/index"
// import About from "./components/About/index"
// import Contact from "./components/Contact/index"
import createHistory from 'history/createBrowserHistory';


function App() {


  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <div className="App">
         {/* <Navigation/> */}
         <Router history = {history}>
           <Switch>
             {/* <Route path="/" component={Offerings}/> */}
             <Route path="/" component={Homepage}/>
           </Switch>
         </Router>
       {/* <Footer></Footer> */}
         
    </div>
  
  );
}

export default App;
