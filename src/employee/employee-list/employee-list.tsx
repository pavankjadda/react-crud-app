import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import React from 'react';
import {BASE_URL, EMPLOYEE_API_URL} from '../../constants/app.constants';

export interface Employee
{
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export class EmployeeList extends React.Component<any, any>
{
    constructor(props)
    {
        super(props);
        this.state = {employees: []}
    }

    componentDidMount()
    {
        axios.get(BASE_URL + EMPLOYEE_API_URL)
            .then(res =>
            {
                let employees = res.data;
                this.setState({employees});
            })
    }

    render()
    {
        return (
            <TableContainer component={Paper}>
                <Table className="table" aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state !== undefined && this.state !== null && this.state.employees !== undefined && this.state.employees !== null ?
                            this.state.employees.map(employee => (
                                <TableRow key={employee.id}>
                                    <TableCell component="th" scope="row">
                                        {employee.id}
                                    </TableCell>
                                    <TableCell align="right">{employee.firstName}</TableCell>
                                    <TableCell align="right">{employee.lastName}</TableCell>
                                    <TableCell align="right">{employee.email}</TableCell>
                                    <TableCell align="right">{employee.phone}</TableCell>
                                </TableRow>
                            )) : ''
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

