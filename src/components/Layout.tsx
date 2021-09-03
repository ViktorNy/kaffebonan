import React from 'react'
import { Route, Switch } from 'react-router'
import { ProductPage } from '../pages/ProductPage'
import Startpage from '../pages/StartPage'
import { HeaderBar } from './Header'

export const Layout = () => {
    return (
        <div>
            <HeaderBar />
            <Switch>
                <Route exact path='/' component={Startpage} />
                <Route exact path='/product/:id' component={ProductPage} />
            </Switch>
        </div>
    )   
}