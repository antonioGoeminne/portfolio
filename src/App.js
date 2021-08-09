import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Projects } from "./pages/projects/Projects"
import { Logo } from "./components/logo/Logo"

function App() {
  return (
    <Router>
    <Switch>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route exact path='/projects'>
            <Projects />
        </Route>
        <Route path='*'>
        <h3>error 404</h3>
        </Route>
    </Switch>
</Router>
  );
}

export default App;
