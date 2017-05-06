import React from 'react';
import ReactDOM from 'react-dom';
import Home from './routes/Home';
import Detail from './routes/Detail'
import Login from './routes/Login'
import Product from './routes/Product'
import Regsiter from './routes/Regsiter'
import Classify from "./routes/Classify"
import Cart from "./routes/Cart";


import Footer from './component/Footer'
import {Router,Route,hashHistory,IndexRoute} from "react-router"
//import Store from './../config/store.js'

const DetailPage =()=>{
  return<div>
    333
    <Footer active="1"/>
  </div>
}
const LoginPage =()=>{
  return<div>
    111
    <Footer active="2"/>
  </div>
}
const RegsiterPage =()=>{
  return<div>
    2224344
    <Footer active="3"/>
  </div>
}
const ProductPage =()=>{
  return<div>
   333
    <Footer active="4"/>
  </div>
}
const Tabs = (props)=>{
  return <div>
      {props.children}

  </div>
}



const App=()=><Router history={hashHistory}>
        <Route path="/" component={Tabs}>
          <IndexRoute component={Home}/>
          <Route path="/classify" component={DetailPage}/>
          <Route path="/mine" component={LoginPage}/>
        </Route>
        <Route path="/cart" component={RegsiterPage}/>
        <Route path="*" component={Home}/>

</Router>




ReactDOM.render(

<Cart/>
  ,document.getElementById('root')
);
