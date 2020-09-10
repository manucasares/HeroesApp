import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import { Navbar } from '../Components/ui/Navbar'
import { MarvelScreen } from '../Components/marvel/MarvelScreen';
import { DcScreen } from '../Components/dc/DcScreen';
import { HeroScreen } from '../Components/heroes/HeroScreen';
import { SearchScreen } from '../Components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}/>
                    <Route exact path="/hero/:heroeId" component={HeroScreen}/>
                    <Route exact path="/dc" component={DcScreen}/>
                    <Route exact path="/search" component={SearchScreen}/>


                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
