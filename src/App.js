import React from 'react';
import Layout from "./components/Layout/Layout"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/logout';
import { Route , Switch, Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import { authCheckState } from './store/actions/';


class App extends React.Component{
 
  componentDidMount(){
    this.props.dispatch(authCheckState())
  }

  render(){
    let route =(
      <Switch>
        <Route exact path='/' component={BurgerBuilder} />
        <Route  path='/auth' component = { Auth } />
        <Redirect to='/'/>
      </Switch>
    )

    if (this.props.isAuthenticated){
      route=(
        <Switch>
          <Route exact path='/' component={BurgerBuilder} />
          <Route  path='/checkout' component = {  Checkout}/>
          <Route  path='/logout' component = { Logout } />
          <Route  path='/orders' component = {  Orders } />
          <Route  path='/auth' component = { Auth } />
          <Redirect to='/'/>
        </Switch>
      )
    }
    return(
        <div >
          <Layout>
            {route}
          </Layout>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    isAuthenticated : state.auth.token !== null
  }
}

export default connect(mapStateToProps)(App);
