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
import doodle from "./media/doodle.png"
import Homepage from "./pages/Homepage/index"
import WorksDetails from "./pages/WorksDetails/index"
// import BlogPost from "./pages/BlogPost/index.js"
// import Footer from "./components/Footer/index.js"
// import Portfolio from "./components/Portfolio/index"
// import Pricing from "./components/Pricing/index"
// import About from "./components/About/index"
// import Contact from "./components/Contact/index"
import createHistory from 'history/createBrowserHistory';


function App() {


  let worksObject = [
    {
      image: doodle,
      id: 0,
      title: 'Small Doodles.',
      price: '50',
      description: 'Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.'
    },
    {
      image: doodle,
      id: 1,
      title: 'Small Doodles.',
      price: '200',
      description: 'This session is designed for introspection as we become sensitive to the present. I have a variety of sessions that I can lead you through, whether it is through the art of becoming noone, or using matras.'
    },
    {
      image: doodle,
      id: 2,
      title: 'Small Doodles.',
      price: '400',
      description: 'Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.'
    },
    {
      image: doodle,
      id: 3,
      title: 'Small Doodles.',
      price: '1,000',
      description: 'Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.'
    },
    {
      image: doodle,
      id: 4,
      title: 'Small Doodles.',
      price: '50',
      description: 'Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.'
    },
    {
      image: doodle,
      id: 5,
      title: 'Small Doodles.',
      price: '200',
      description: 'Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.'
    },
    {
      image: doodle,
      id: 6,
      title: 'Small Doodles',
      price: '400',
      description: 'Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.'
    },
    {
      image: doodle,
      id: 7,
      title: 'Small Doodles.',
      price: '1,000',
      description: 'Here is a brief description as to why this package would be dope and that you should probably buy this damn thing.'
    }
  ]

  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <div className="App">
      <Navigation />
      <Router history={history}>
        <Switch>
          {/* <Route path="/" component={Offerings}/> */}
          <Route path="/works/:id" render={(props) => <WorksDetails {...props} worksObject={worksObject} title={`Props through render`} />} />
          <Route exact path="/" render={(props) => <Homepage {...props} worksObject={worksObject} title={`Props through render`} />} />
        </Switch>
      </Router>
      {/* <Footer></Footer> */}

    </div>

  );
}

export default App;
