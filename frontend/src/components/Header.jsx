import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import {FaUser} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'
import {useSelector} from 'react-redux'

const Header = () => {

    const {userInfo} = useSelector((state)=> state.auth)

    const logoutHandler = () =>{
        console.log('logout')
    }
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/" >MyLDB</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link href='/login'> <FaUser/>  Sign In</Nav.Link>
                    </Nav>

                    {userInfo ? (
                        <NavDropdown title={userInfo.name} id='username'>
                            <LinkContainer to='/profile'>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </LinkContainer>
                            <NavDropdown.Item onClick={logoutHandler}>
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                        ) : (
                            <LinkContainer to='/login'>
                                <Nav.Link href='/login'> <FaUser/>Sign In</Nav.Link>
                            </LinkContainer>
                        )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header