import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Index from "./Components/Index/Index"
import Logout from "./Components/Logout/Logout"
import Register from "./Components/Register/Register"
import Login from "./Components/Login/Login"
import Error from "./Components/Error/Error"
import Main from "./Components/Main/Main"


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
        <Route path="*" component={Error}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
