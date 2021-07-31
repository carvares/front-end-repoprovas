import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './styles/reset.css'
import Topbar from "./TopBar";
import Home from "./Home";

function App() {
    return (
        <BrowserRouter>
            <Topbar />
            <Switch>

                <Route path="/" exact>
                    <Home />
                </Route>
                


            </Switch>
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.getElementById("root"));