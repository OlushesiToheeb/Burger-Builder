import React from 'react';
import Layout from "./components/Layout/Layout"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/logout';
import { Route , Switch} from "react-router-dom";
import { connect } from 'react-redux';
import { authCheckState } from './store/actions/';


class App extends React.Component{
 
  componentDidMount(){
    this.props.dispatch(authCheckState())
  }

  render(){
    return(
        <div >
          <Layout>
            <Switch>
              <Route exact path='/' component={BurgerBuilder} />
              <Route  path='/checkout' component = { Checkout }/>
              <Route  path='/auth' component = { Auth } />
              <Route  path='/logout' component = { Logout } />
              <Route  path='/orders' component = { Orders } />
            </Switch>
          </Layout>
        </div>
    )
  }
}

export default connect()(App);
