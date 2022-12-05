import React from 'react'
import './Navbar1.css'
import logoIcon from './logoImg.png'
import bellIcon from './bell.png'
import checkboxIcon from './checkbox.png'
import profileIcon from './profile.png'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';





const Navbar1 = () => {
    return (
        <div className='topbar'>
            <div className='topbar-left'>
                <img src={logoIcon} alt="Logo Icon" className='topbarIcons' />
                <Container>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search here"
                        />
                    </Form>
                </Container>

            </div>

            <div className='topbar-right'>
                <div className='topbarIconContainer'>
                    <img src={bellIcon} alt="Bell Icon" className='topbarIcons' />
                    <span className='topIconBadge'>12</span>
                </div>

                <div className='topbarIconContainer'>
                    <img src={checkboxIcon} alt="Checkbox Icon" className='topbarIcons' />
                    <span className='topIconBadge'>2</span>
                </div>

                <div className='topbarIconContainer'>
                    <div className='profile-section'>
                        <img src={profileIcon} alt="Profile Icon" className='topbarIcons' />
                        <div className='profile-name'>
                            Tiago Accounting
                            <div className='designation'>Super Admin</div>
                        </div>
                    </div>


                </div>


            </div>





        </div>
    )
}

export default Navbar1
