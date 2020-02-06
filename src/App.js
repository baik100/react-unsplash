import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import SearchPhotos from './pages/SearchPhotos'

function App(){

    return (
        <div className="App header-padding">
            <Switch>
                <Route path="/Home" component={Home}/>
                <Route path="/Collections" component={Collections}/>
                <Route path="/search/photos/:query" component={SearchPhotos}/>
                <Redirect to={"/Home"}/>
            </Switch>
        </div>
    );
}

export default App;
