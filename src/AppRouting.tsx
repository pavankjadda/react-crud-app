import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from './App';
import EmployeeCreate from './employee/employee-create';
import Employees from './employee/employees';


export default class AppRouting extends React.Component
{
    render()
    {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <App/>
                        </Route>
                        <Route path="/employee">
                            <Employees/>
                        </Route>
                        <Route path="/employee/create">
                            <EmployeeCreate/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
