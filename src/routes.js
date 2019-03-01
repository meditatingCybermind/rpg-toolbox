// https://medium.freecodecamp.org/hitchhikers-guide-to-react-router-v4-a957c6a5aa18
import React, { Component } from 'react';
import { BrowserRouter as Route, Switch, Redirect } from 'react-router-dom';
import Roller from './views/roller/roller';
import Home from './views/home/home';
// import NotFound from './views/notFound/notFound';

class Routes extends Component {
    render () {
        return (
            <div>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/Home" component={Home}/>
                    </Route>
                    <Route exact path='/Roller' component={Roller}/>
                </Switch>
            </div>
        )
    }
}

export default Routes;
