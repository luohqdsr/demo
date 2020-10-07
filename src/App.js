import React, { Component } from 'react';
import {Provider} from 'react-redux';
import 'antd/dist/antd.css'; 
import store from './sotre/index'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import DataComparison from './container/comparison-analysis'

class App extends Component{
 
  render() {
    return(
      <div>

     
        <Provider store={store}>
        
           <BrowserRouter>
            <div>
              <Switch>
                <Route path='/plantView/:idPath' exact component={DataComparison} ></Route>
              </Switch>
            </div>
          </BrowserRouter> 
        </Provider>
         

      </div>
    
      
    )
  }

}
export default App;
