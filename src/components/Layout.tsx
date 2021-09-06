import { Route, Switch } from 'react-router'
import { CheckoutPage } from '../pages/CheckoutPage'
import { ProductPage } from '../pages/ProductPage'
import StartPage from '../pages/StartPage'
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