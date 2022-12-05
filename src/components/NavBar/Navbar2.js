import React from 'react'
import './Navbar2.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import homeIcon from './home.png'
import plansIcon from './plans.png'
import docIcon from './doc.png'
import usersIcon from './users.png'
import couponIcon from './coupon.png'
import burgerIcon from './burger.png'

const Navbar2 = () => {
  return (
    <div>
      <Navbar className='navbar-Container'>
        <Container>
        <img src={homeIcon} alt="Home Icon" className='navIcons'/>
          <Navbar.Brand  href="#dashboard">Dashboard</Navbar.Brand>
          <Nav className="me-auto">
          <img src={plansIcon} alt="Plans Icon" className='navIcons'/>
            <Nav.Link href="#plans">Plans</Nav.Link>
            <img src={docIcon} alt="Doc Icon" className='navIcons'/>
            <Nav.Link href="#tasks">Task</Nav.Link>
            <img src={usersIcon} alt="Users Icon" className='navIcons'/>
            <Nav.Link href="#customers">Customers</Nav.Link>
            <img src={couponIcon} alt="Coupon Icon" className='navIcons'/>
            <Nav.Link href="generate a plan">Generate a Plan</Nav.Link>
            <img src={burgerIcon} alt="Burger Icon" className='navIcons'/>
            <Nav.Link href="#task history">Task History</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbar2
