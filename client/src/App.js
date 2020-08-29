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
import doodle from "./media/doodle.jpg"
import book from "./media/book.jpg"
import candle from "./media/candle.jpg"
import penplane from "./media/penplane.jpg"
import pen from "./media/pen.jpg"
import ship from "./media/ship.JPG"
import standingPen from "./media/standingpen.jpg"
import woman from "./media/woman.JPG"
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
      title: 'Small Doodles',
      additionalPics: [
        {
          addPic: penplane
        },
        {
          addPic: candle
        },
        {
          addPic: book
        },
        {
          addPic: pen
        },
        {
          addPic: standingPen
        },
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      image: ship,
      id: 1,
      title: "I'm on a boat",
      additionalPics: [
        {
        }
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      image: woman,
      id: 2,
      title: 'Big Doodles.',
      additionalPics: [
        {

        }
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      image: doodle,
      id: 3,
      title: 'Medium Doodles.',
      additionalPics: [
        {

        }
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      image: doodle,
      id: 4,
      title: 'Ok Doodles.',
      additionalPics: [
        {

        }
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      image: doodle,
      id: 5,
      title: 'Those doodes',
      additionalPics: [
        {

        }
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      image: doodle,
      id: 6,
      title: 'hey Doodles',
      additionalPics: [
        {

        }
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      image: doodle,
      id: 7,
      title: 'hi Doodles.',
      additionalPics: [
        {

        }
      ],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ]

  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });

  return (
    <div className="App">
      {/* <Navigation /> */}
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
