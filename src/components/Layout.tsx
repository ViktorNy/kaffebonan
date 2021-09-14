import { Route, Switch } from 'react-router'
import { AdminPage } from '../pages/AdminPage'
import { CheckoutPage } from '../pages/CheckoutPage'
import { ConfirmationPage } from '../pages/ConfirmationPage'
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
                <Route exact path='/confirmation' component={ConfirmationPage} />
                <Route exact path='/admin' component={AdminPage} />
            </Switch>
        </div>
    )   
}