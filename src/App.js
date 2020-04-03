import React from 'react';
import Layout from "./components/Layout/Layout"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"
import Checkout from "./containers/Checkout/Checkout";
import { Route , Switch} from "react-router-dom";
class App extends React.Component{
 

  render(){
    return(
        <div >
          <Layout>
            <Switch>
              <Route exact path='/' component={BurgerBuilder} />
              <Route  path='/checkout' component = { Checkout } />
            </Switch>
          </Layout>
        </div>
    )
  }
}

export default App;
