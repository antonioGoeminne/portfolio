import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Projects } from "./pages/projects/Projects"

export const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/projects'>
                <Projects />
            </Route>
        </Switch>
    </Router>
)
