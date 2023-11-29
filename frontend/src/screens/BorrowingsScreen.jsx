import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {Row, Col, Table, Button, Card, Form} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import {FaTimes, FaTrash, FaEdit, FaCheck} from 'react-icons/fa';
import {toast} from "react-toastify"
import { useGetBorrowingsQuery } from '../slices/borrowingsApiSlice'

const BorrowingsScreen = () => {

    const {data: borrowings, isLoading, error, refetch} = useGetBorrowingsQuery()

    const deleteHandler = async(e)=>{
        console.log("Deleted")
    }

  return (
    <>
      {isLoading ? (
        <Loader />

      ): error ?  (
        <Message variant='danger'>
            {error?.data?.message || error.error}
        </Message>
      ):(
        <>
          <h1>Borrowings Management</h1>
          <Row className='align-items-center'>
            <Col>
              <h3>Number of borrowings - <strong>{borrowings.length}</strong></h3>
            </Col>
            <Col xs="auto">
              <LinkContainer to={"/main/book/create"}>
                <Button variant="primary">Add a New Borrowing</Button>
              </LinkContainer>
            </Col>
          </Row>
          
          <Row>
           
                <Table striped hover responsive className="table-sm">
                <thead>
                  <tr>
                    <th>N</th>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>From Whom Borrowed</th>
                    <th>Taking Date</th>
                    <th>Returned Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {borrowings.map((borrowing, index)=>(
                    <tr key={borrowing._id}>
                      <td>{index+1}</td>
                      <td>{borrowing.bookName}</td>
                      <td>{borrowing.author}</td>
                      <td>{borrowing.whomBorrowed}</td> 
                      <td>{borrowing.takingDate.substring(0, 10)}</td>
                      <td>{borrowing.returnedDate !== null ? borrowing.returnedDate.substring(0, 10) : "Not Returned"}</td>
        
                      <td>
                        <LinkContainer to={`/main/borrowing/${borrowing._id}/update`}>
                          <Button variant="light" className="btn-sm mx-1">
                            <FaEdit />
                          </Button>
                        </LinkContainer>
                        <Button variant="danger" className="btn-sm mx-1" onClick={()=>deleteHandler(borrowing._id)}>
                          <FaTrash  style={{color: "white"}}/>
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

          </Row>
        </>
      )}

    </>
  )
}

export default BorrowingsScreen
