import {useNavigate} from 'react-router-dom'
import {Badge, Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import {FaUser} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import { useLogoutMutation } from '../slices/usersApiSlice'
import {logout} from "../slices/authSlice"
import SearchBox from './SearchBox'

const Header = () => {

    const {userInfo} = useSelector((state)=> state.auth)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logoutApiCall] = useLogoutMutation();

    const logoutHandler = async() =>{
        try {
            await logoutApiCall().unwrap();
            dispatch(logout());
            navigate('/login');
            console.log("logout")
          } catch (err) {
            console.error(err);
          }
    }
  return (
    <header>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/main">MyLDB</Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='ms-auto'>
                    
                        {userInfo ? (
                            
                            <>
                            <Nav.Link href="/main/quotes">Quotes</Nav.Link>
                            <Nav.Link href="/main/borrowings">Borrowings</Nav.Link>
                            <Nav.Link href="/main/lendings">Lendings</Nav.Link>
                            <Nav.Link href="/main/finishedbooks">Finished</Nav.Link>
                            {/* <SearchBox/> */}
                            <FaUser />
                            <NavDropdown title={userInfo.username} id='username'>
                                
                                <LinkContainer to='/profile'>
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>
                                <NavDropdown.Item onClick={logoutHandler}>
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                            </>
                        ) : (
                            <LinkContainer to='/login'>
                                <Nav.Link>
                                    <FaUser /> Sign In
                                </Nav.Link>
                            </LinkContainer>
                        )}
                        </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header