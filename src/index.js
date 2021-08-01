import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './styles/reset.css'
import Topbar from "./TopBar";
import Home from "./Home";
import UserContext from "./contexts/UserContext";
import {useState} from "react";

function App() {
    let [insert, setInsert] = useState(false)
    return (
        <UserContext.Provider value={{ insert, setInsert }}>
            <BrowserRouter>
                <Topbar />
                <Switch>

                    <Route path="/" exact>
                        <Home />
                    </Route>



                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    )
}


ReactDOM.render(<App />, document.getElementById("root"));