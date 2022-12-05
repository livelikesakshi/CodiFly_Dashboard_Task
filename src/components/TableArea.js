import React from 'react'
import './TableArea.css'
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import todoImg from './ToDo.png'
import starImg from './star.png'
import greencheckImg from './greencheck.png'

const TableArea = () => {
    return (
        <div>
            <div className='todo-heading'>
                <img src={todoImg} alt="To Do Icon" className='todo-logo' />
                <div className='todo-text'>To Do List</div>
            </div>

            <div className='tables'>

                <div className='table1'>
                    <Table striped>
                        <thead>
                            <tr>
                                <th align='left'>Task Name</th>
                                <th align='left'>Plan Name</th>
                                <th align='left'>Responsible</th>
                                <th align='left'>Deadline Datetime</th>
                                <th align='left'>Task Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td align='left'>Proposal Document save in PDF</td>
                                <td align='left'>Design Team</td>
                                <td align='left'>Mr. S R Kumar</td>
                                <td align='left'>15-11-2022</td>
                                <td align='right'>Ongoing</td>
                            </tr>
                            <tr>
                                <td align='left'>Proposal Document save in PDF</td>
                                <td align='left'>Design Team</td>
                                <td align='left'>Mr. S R Kumar</td>
                                <td align='left'>15-11-2022</td>
                                <td align='right'>Complete</td>
                            </tr>
                            <tr>
                                <td align='left'>Proposal Document save in PDF</td>
                                <td align='left'>Design Team</td>
                                <td align='left'>Mr. S R Kumar</td>
                                <td align='left'>15-11-2022</td>
                                <td align='right'>Incomplete</td>
                            </tr>
                            <tr>
                                <td align='left'>Proposal Document save in PDF</td>
                                <td align='left'>Design Team</td>
                                <td align='left'>Mr. S R Kumar</td>
                                <td align='left'>15-11-2022</td>
                                <td align='right'>Pending</td>
                            </tr>
                            <tr>
                                <td align='left'>Proposal Document save in PDF</td>
                                <td align='left'>Design Team</td>
                                <td align='left'>Mr. S R Kumar</td>
                                <td align='left'>15-11-2022</td>
                                <td align='right'>Complete</td>
                            </tr>
                            <tr>
                                <td align='left'>Proposal Document save in PDF</td>
                                <td align='left'>Design Team</td>
                                <td align='left'>Mr. S R Kumar</td>
                                <td align='left'>15-11-2022</td>
                                <td align='right'>Complete</td>
                            </tr>
                        </tbody>

                    </Table>

                </div>


                <div className='table2'>
                    <Table >
                        <tbody>
                            <tr>
                                <td className='row1'>
                                    <img src={starImg} alt="Star Icon" />
                                    <td align='left'>#1</td>
                                </td>

                                <td align='left' className='row2'>
                                    <div className='row2-heading'>Save in PDF</div>
                                    <div>
                                        Lead Manager
                                    </div>
                                </td>

                                <div className='row3'>
                                    <img src={greencheckImg} alt="Greencheck Icon" />
                                    <td align='left' >
                                        <div className='row3-heading'>165 hr</div>
                                        <div>
                                            Task Closed/ Week</div>
                                    </td>
                                </div>
                            </tr>

                            <tr>
                                <td className='row1'>
                                    <img src={starImg} alt="Star Icon" />
                                    <td align='left'>#2</td>
                                </td>

                                <td align='left' className='row2'>
                                    <div className='row2-heading'>View past data in list</div>
                                    <div>
                                        Product Designer
                                    </div>
                                </td>

                                <div className='row3'>
                                    <img src={greencheckImg} alt="Greencheck Icon" />
                                    <td align='left'>
                                    <div className='row3-heading'>129 hr</div>
                                        <div>
                                            Task Closed/ Week</div>
                                    </td>
                                </div>
                            </tr>

                            <tr>
                                <td className='row1'>
                                    <img src={starImg} alt="Star Icon" />
                                    <td align='left'>#3</td>
                                </td>

                                <td align='left' className='row2'>
                                <div className='row2-heading'>Form Design new work</div>
                                    <div>
                                        Marketing Manager
                                    </div>
                                </td>

                                <div className='row3'>
                                    <img src={greencheckImg} alt="Greencheck Icon" />
                                    <td align='left'>
                                    <div className='row3-heading'>121 hr</div>
                                        <div>
                                            Task Closed/ Week</div>
                                    </td>
                                </div>
                            </tr>

                            <tr>
                                <td className='row1'>
                                    <img src={starImg} alt="Star Icon" />
                                    <td align='left'>#4</td>
                                </td>

                                <td align='left' className='row2'>
                                <div className='row2-heading'>Brief Design doc</div>
                                    <div>
                                        Programmer
                                    </div>
                                </td>

                                <div className='row3'>
                                    <img src={greencheckImg} alt="Greencheck Icon" />
                                    <td align='left'>
                                    <div className='row3-heading'>98 hr</div>
                                        <div>
                                            Task Closed/ Week</div>
                                    </td>
                                </div>
                            </tr>

                            <tr>
                                <td className='row1'>
                                    <img src={starImg} alt="Star Icon" />
                                    <td align='left'>#5</td>
                                </td>

                                <td align='left' className='row2'>
                                <div className='row2-heading'>Weekly report doc</div>
                                    <div>
                                        Head of Digital Marketing
                                    </div>
                                </td>

                                <div className='row3'>
                                    <img src={greencheckImg} alt="Greencheck Icon" />
                                    <td align='left'>
                                    <div className='row3-heading'>72 hr</div>
                                        <div>
                                            Task Closed/ Week</div>
                                    </td>
                                </div>
                            </tr>

                        </tbody>

                    </Table>

                </div>


            </div>



        </div>

    )
}

export default TableArea
