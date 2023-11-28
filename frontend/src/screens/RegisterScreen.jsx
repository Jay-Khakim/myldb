import {useState, useEffect} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {Form, Button, Row, Col} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader'
import {useRegisterMutation} from '../slices/usersApiSlice'
import { setCredentials} from "../slices/authSlice"
import {toast} from "react-toastify"

const RegisterScreen = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const distpatch = useDispatch();
    const navigate = useNavigate();

    const [register, {isLoading}] = useRegisterMutation();

    const {userInfo} = useSelector((state)=>state.auth);

    const {search} = useLocation();
    const sp = new URLSearchParams(search);
    const redirect = sp.get('redirect') || '/main'; 

    useEffect(()=>{
        if(userInfo){
            navigate(redirect);  
        }
    }, [userInfo, redirect, navigate])

    const submitHandler = async(e) =>{
        e.preventDefault();
        if(password !== confirmPassword){
            toast.error('Passwords do not match')
            return;
        }else{
            try {
                const res = await register({firstName, lastName, username, email, phoneNumber, gender, password}).unwrap();
                distpatch(setCredentials({...res, }))
                navigate(redirect)
                toast.success("Profile created successfully")
                
            } catch (err) {
                toast.error(err?.data?.message || err.error)
            }
        }
        console.log("hello")
        
    }

    return (
        <FormContainer>
            <h1>Sign Up</h1>

            <Form onSubmit={submitHandler}>
                <Row className='mb-3'>
                    <Form.Group as={Col} controlId='firstName' className='my-3'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter First Name'
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId='lastName' className='my-3'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Enter Last Name'
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Row>
                
                <Form.Group  controlId='username' className='my-3'>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type='text'
                        required
                        placeholder='Enter username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email' className='my-3'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        required
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Row className='mb-3'>
                    <Form.Group as={Col} controlId='phoneNumber' className='my-3'>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type='text'
                            required
                            placeholder='000-0000-0000'
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId='gender' className='my-3'>
                        <Form.Label>Select you gender</Form.Label>
                        <Form.Control
                            as='select'
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                        </Form.Control>
                    </Form.Group>
                </Row>
                
                <Row className='mb-3'>
                    <Form.Group as={Col} controlId='password' className='my-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            required
                            placeholder='Enter password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId='confirmPassword' className='my-3'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type='password'
                            required
                            placeholder='Confirm password'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}>
                        </Form.Control>
                    </Form.Group>
                </Row>


                {/* <Button type='submit' variant='primary' className="mt-2" disabled={ isLoading}> */}
                <Button type='submit' variant='primary' className="mt-2">
                    Register
                </Button>

                {/* {isLoading && <Loader />} */}
            </Form>

            <Row className='py-3'>
                <Col>
                    Already have an account ? <Link to={redirect ? `/login?redirect=${redirect}`: '/login'}>Login</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen

