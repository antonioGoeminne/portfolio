import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./pages/home/Home"

export const Routes = () => (
    <Router>
        <Switch>
            <Route exact path to='/'>
                <Home />
            </Route>
        </Switch>
    </Router>
)
