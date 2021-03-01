import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Index from "./Components/Index/Index"
import Logout from "./Components/Logout/Logout"
import Register from "./Components/Register/Register"
import Login from "./Components/Login/Login"
import Error from "./Components/Error/Error"
import Main from "./Components/Main/Main"
import Registerget from "./Components/Registerget/Registerget"
import Success from "./Components/Success/Success"


//ifUserisLoggedIn Routes

import ifUserIsLoggedIn from "./Components/Logout/IfUserIsLoggedIn/ifUserIsLoggedIn"
import ifUserIsAlreadyRegistered from "./Components/Register/ifAlreadyRegistered/ifAlreadyRegistered"


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/login" component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path="/logout" component={Logout}/>
        <Route path='/main' component={Main}/>
        <Route path="/registerget/:id" component={Registerget}/>
        <Route path="/success" component={Success}/>
        <Route path="/confirmlogout" component={ifUserIsLoggedIn}/>
        <Route path="/alreadyregister" component={ifUserIsAlreadyRegistered}/>
        <Route path="*" component={Error}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
