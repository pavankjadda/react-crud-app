import React from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";
import Employees from '../employee/employees';

class Home extends React.Component
{
    constructor(props: Readonly<{}>)
    {
        super(props);
    }

    render()
    {
        return (
            <Router>
                <ol>
                    <li>
                        <Link to="/employees">
                            <Employees/>
                        </Link>
                    </li>
                    <li>Create New</li>
                    <li>Employees</li>
                    <li>Employees</li>
                </ol>
            </Router>
        );
    }
}

export default Home;
