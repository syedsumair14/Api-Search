import React from 'react';
import Home from './Home';
import Show from './Show';
import Add from './Add';

import { Route, Switch } from 'react-router-dom';


class App extends React.Component{
    render(){
        return(
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/show/:rollNo' component={Show} />
                <Route exact path='/add' component={Add} />
            </Switch>
        )
    }
};

export default App;