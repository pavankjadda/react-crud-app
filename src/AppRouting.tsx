import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from './App';
import EmployeeEdit from "./employee/employee-edit/employee-edit";
import {EmployeeList} from './employee/employee-list/employee-list';
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
                            <EmployeeEdit/>
                        </Route>
                        <Route path="/employee/edit/:id">
                            <EmployeeEdit/>
                        </Route>
                        <Route path="/employee">
                            <EmployeeList employees={undefined}/>
                        </Route>

                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}
