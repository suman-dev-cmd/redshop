import React from "react";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layouts/Header';
import {CssBaseline} from '@material-ui/core';
import Home from "./components/home/Home";
import CartList from "./components/cart/CartList";
const App:React.FC = () => {
  return(
      <Router>
        <CssBaseline />
        <Header />
        <Route path='/' component={Home} exact/>
        <Route path='/cart' component={CartList} exact/>
      </Router>
  );
};

export default App;