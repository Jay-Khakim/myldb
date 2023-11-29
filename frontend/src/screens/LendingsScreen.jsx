import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {Row, Col, Table, Button, Card, Form} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import {FaTimes, FaTrash, FaEdit, FaCheck} from 'react-icons/fa';
import {toast} from "react-toastify"
import { useGetLendingsQuery } from '../slices/lendingsApiSlice'

const LendingsScreen = () => {

    const {data: lendings, isLoading, error, refetch} = useGetLendingsQuery()

    const deleteHandler = async(e)=>{
        console.log("Deleted")
    }
  return (
    <>
    <Link to='/main' className="btn btn-light my-3">Go Back</Link>
      {isLoading ? (
        <Loader />

      ): error ?  (
        <Message variant='danger'>
            {error?.data?.message || error.error}
        </Message>
      ):(
        <>
          <h1>Lendings Management</h1>
          <Row className='align-items-center'>
            <Col>
              <h3>Number of lendings - <strong>{lendings.length}</strong></h3>
            </Col>
            <Col xs="auto">
              <LinkContainer to={"/main/book/create"}>
                <Button variant="primary">Add a New Lending</Button>
              </LinkContainer>
            </Col>
          </Row>
          
          <Row>
           
                <Table striped hover responsive className="table-sm my-3">
                <thead>
                  <tr>
                    <th>N</th>
                    <th>Book ID</th>
                    <th>Book Name</th>
                    <th>Author</th>
                    <th>To Whome lended</th>
                    <th>Taking Date</th>
                    <th>Returned Date</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {lendings.map((lending, index)=>(
                    <tr key={lending._id}>
                      <td>{index+1}</td>
                      <td>{lending.bookId}</td>
                      <td>{lending.bookName}</td>
                      <td>{lending.author}</td>
                      <td>{lending.whoTook}</td> 
                      <td>{lending.takingDate.substring(0, 10)}</td>
                      <td>{lending.returnedDate !== null ? lending.returnedDate.substring(0, 10) : "Not Returned"}</td>
        
                      <td>
                        <LinkContainer to={`/main/lending/${lending._id}/update`}>
                          <Button variant="light" className="btn-sm mx-1">
                            <FaEdit />
                          </Button>
                        </LinkContainer>
                        <Button variant="danger" className="btn-sm mx-1" onClick={()=>deleteHandler(lending._id)}>
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

export default LendingsScreen
