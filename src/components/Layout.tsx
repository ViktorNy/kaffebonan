import { Route, Switch } from 'react-router'
import { CheckoutPage } from '../pages/CheckoutPage1'
import { ProductPage } from '../pages/ProductPage1'
import StartPage from '../pages/StartPage1'
import { HeaderBar } from './Header'

export const Layout = () => {
    return (
        <div>
            <HeaderBar />
            <Switch>
                <Route exact path='/' component={StartPage} />
                <Route exact path='/product/:id' component={ProductPage} />
                <Route exact path='/checkout' component={CheckoutPage} />
            </Switch>
        </div>
    )   
}