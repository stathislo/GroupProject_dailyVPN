import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Index from "./Components/Index/Index"
import Logout from "./Components/Logout/Logout"
import Forgot from "./Components/Register/Forgot"
import Reset from "./Components/Register/Reset"
import Login from "./Components/Login/Login"
import Error from "./Components/Error/Error"
import Registerget from "./Components/Registerget/Registerget"
import Success from "./Components/Success/Success"
import Product_Low from "./Components/Product_Low/ProductLow"
import Product_Medium from "./Components/Product_Medium/ProductMedium"
import Product_High from "./Components/Product_High/ProductHigh"
import BLOG from "./Components/BLOG/Index/Index"
import PostPage from "./Components/BLOG/Postpage/Postpage"
import CreatePost from "./Components/BLOG/CreatePost/CreatePost"
import News from "./Components/BLOG/News/News"
import Search from "./Components/BLOG/SearchPage/SearchPage"


//ifUserisLoggedIn Routes

import ifUserIsLoggedIn from "./Components/Logout/IfUserIsLoggedIn/ifUserIsLoggedIn";
import ifUserIsAlreadyRegistered from "./Components/Register/ifAlreadyRegistered/ifAlreadyRegistered";
import SearchPage from "./Components/BLOG/SearchPage/SearchPage";
import Moderator from "./Components/BLOG/Index/Moderator/Moderator";
import User from "./Components/BLOG/Index/User/User";
import Administrator from './Components/BLOG/Index/Administrator/Admin';
import ModeratorChat from "./Components/BLOG/Index/Moderator/Chat/ModeratorChat";
import ModeratorPosts from "./Components/BLOG/Index/Moderator_Posts/Moderator_Posts";
import General_terms from "./Components/Index/Footer/General_terms/General_terms";
import Privacy_policy from "./Components/Index/Footer/Privacy_policy/Privacy_policy";
import Faq from './Components/Index/Footer/Faq/Faq';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/login" component={Login} />
          <Route exact path='/forgot' component={Forgot} />
          <Route exact path='/reset/:id' component={Reset}/>
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/registerget/:id" component={Registerget} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/confirmlogout" component={ifUserIsLoggedIn} />
          <Route exact path="/alreadyregister" component={ifUserIsAlreadyRegistered} />
          <Route exact path='/product1/:name' component={Product_Low} />
          <Route exact path="/product2/:name" component={Product_Medium} />
          <Route exact path="/product3/:name" component={Product_High} />
          <Route exact path='/blog' component={BLOG} />
          <Route exact path='/posts/:postId' component={PostPage} />
          <Route exact path='/createpost' component={CreatePost} />
          <Route exact path="/moderator" component={Moderator} />
          <Route exact path='/moderatorchat' component={ModeratorChat}/>
          <Route exact path='/moderatorposts' component={ModeratorPosts}/>
          <Route exact path='/generalterms' component={General_terms}/>
          <Route exact path='/privacypolicy' component={Privacy_policy}/>
          <Route exact path='/faq' component={Faq}/>
          <Route exact path='/user' component={User} />
          <Route exact path='/admin' component={Administrator} />
          <Route exact path='/category/:name' component={News} />
          <Route exact path="/blog/search/posts=:search" component={SearchPage} />
          <Route exact path="*" component = {Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
