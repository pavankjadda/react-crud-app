import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from './App';
import EmployeeCreate from './employee/employee-create';
import Employees from './employee/employee-list';
import Footer from './layout/footer/footer';
import Header from './layout/header/header';


export default class AppRouting extends React.Component
{
    render()
    {
        return (
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route exact path="/">
                            <App/>
                        </Route>
                        <Route path="/employee/create">
                            <EmployeeCreate/>
                        </Route>
                        <Route path="/employee">
                            <Employees/>
                        </Route>

                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}
