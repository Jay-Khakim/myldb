import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    const currentYear = new Date().getFullYear()

  return (
    <footer className='footer sticky-bottom bg-light w-100'>
        <Container>
            <Row>
                <Col className='text-center py-3'>
                    <p>MyLDB | Jay Khakim |  &copy; {currentYear}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer