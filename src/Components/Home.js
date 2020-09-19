import React from 'react'
import { Route, Switch } from 'react-router';
import Favourite from './Favourite';
import Header from './Header';
import HomeScreen from './HomeScreen';

function Home() {
    return (
        <>
        <Header/>
        <Switch>
            <Route path="/" exact component={HomeScreen}/>
            <Route path="/favourite" exact component={Favourite}/>
        </Switch>
        </>
    )
}

export default Home;
