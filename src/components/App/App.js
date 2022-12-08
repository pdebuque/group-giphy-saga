import React from 'react';
import FavoriteList from '../FavoriteList/FavoriteList';
import { HashRouter as Router, Route } from 'react-router-dom';

function App(props) {
    return (
        <div>
            <h1>Giphy Search!</h1>
            <Router>
                <Route exact path='/'><FavoriteList /></Route>
                {/* <Route exact path = '/search'><SearchView/></Route> */}

            </Router>

        </div>
    );
}

export default App;
