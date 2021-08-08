import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Projects } from "./pages/projects/Projects"
import { Logo } from "./components/logo/Logo"

export const Routes = () => {
    return(
    <Router>
        <Switch>
            <Route exact path='/'>
                <Logo />
                <Home />
            </Route>
            <Route exact path='/projects'>
                <Projects />
            </Route>
        </Switch>
    </Router>
    )
}
