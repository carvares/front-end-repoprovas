import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './styles/reset.css'
import styled from "styled-components";

function App(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact>
            </Route>
        </Switch>
        </BrowserRouter>
    )
}


ReactDOM.render(<App />, document.getElementById("root"));