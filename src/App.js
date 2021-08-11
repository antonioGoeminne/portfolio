import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Projects } from "./pages/projects/Projects"
import { Contact } from "./pages/contact/Contact";


function App() {
  return (
    <Router>
    <Switch>
        <Route exact path='/portfolio'>
            <Home />
        </Route>
        <Route exact path='/projects'>
            <Projects />
        </Route>
        <Route exact path='/contact'>
            <Contact />
        </Route>
        <Route path='*'>
        <h3>error 404</h3>
        </Route>
    </Switch>
</Router>
  );
}

export default App;
