import React from "react";
import { Header } from "./components/header";
import FileUploadPage from "./FileUploadPage";
import About from "./components/about";
import Login from "./components/login";
import { BrowserRouter as Router, Switch, Route, BrowserRouter , Redirect} from "react-router-dom";
export const App = () => {
  return (
    <BrowserRouter>
    <div>
    <Switch>
      {/* <Router> */}
        {/* <div className="App">
        <div class="topnav"> */}
        {/* <Header /> */}
        {/* <Route exact path = "/" component = {Login} /> */}
        <Route exact path="/" render={()=>{
           const isLogged = window.localStorage.getItem("auth")
           return(
             isLogged ? <Redirect to ="/home"/> : <Login/>
           )
        }}/>
            <Route  path="/home" component={FileUploadPage}/>
            
            <Route path="/about">
            <About />
            </Route>
        {/* </div> */}
        {/* </div>
      </Router> */}
      </Switch>
    </div>
    </BrowserRouter>
  );
};
