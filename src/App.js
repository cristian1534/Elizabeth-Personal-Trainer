import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import Main from "./containers/Main";
import Layout from "./containers/Layout";
import Schedule from "./containers/Schedule";
import Contact from "./containers/Contact";
import Plans from "./containers/Plans";
import Courses from "./containers/Courses";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Admin from "./containers/Admin";
import UpdateConnection from "./containers/UpdateConnection";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={Main} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/prices" component={Plans} />
          <Route exact path="/courses" component={Courses}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/admin" component={Admin}/>
          <Route exact path="/update-payment" component={UpdateConnection}/>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
