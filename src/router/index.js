import React,{ Component } from 'react'
import { BrowserRouter as Router, Route,Redirect, Switch } from 'react-router-dom';
import App from '../views/App'
import First from '../views/First'
import Second from '../views/Second'
import Third from '../views/Third'

class ConfiRouter extends Component{
    constructor(props){
        super(props)
    }
    render (){
        return (
            <Router>
                <App>
                    <Switch>
                        <Route exact path="/" component={First}></Route>
                        <Route exact path="/second" component={Second}></Route>
                        <Route exact path="/third" component={Third}></Route>
                        <Redirect to="/" />
                    </Switch>
                </App>
            </Router>
        )
    }
}
export default ConfiRouter;