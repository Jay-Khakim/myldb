import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='App vh-100'>
      <Header/>
      <Container>
          <Outlet />
      </Container>
      <Footer/>
      <ToastContainer/>
    </div>
  )
}

export default App