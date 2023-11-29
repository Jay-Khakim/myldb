import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {Row, Col, Table, Button, Card, Form} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import {FaTimes, FaTrash, FaEdit, FaCheck} from 'react-icons/fa';
import {toast} from "react-toastify"
import { useGetFinishedBooksQuery } from '../slices/finishedBooksApiSlice'

const FinishedBooksScreen = () => {

    const {userInfo} = useSelector((state)=> state.auth)

    const {data: finishedBooks, isLoading, error, refetch} = useGetFinishedBooksQuery()

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
          <h1>Finished Books Management</h1>
          <Row className='align-items-center'>
            <Col>
              <h3>Number of Finished Books - <strong>{finishedBooks.length}</strong></h3>
            </Col>
            <Col xs="auto">
              <LinkContainer to={"/main/book/create"}>
                <Button variant="primary">Add a Finished Book</Button>
              </LinkContainer>
            </Col>
          </Row>
          
          <Row>
           
                <Table striped hover responsive className="table-sm my-3">
                <thead>
                  <tr>
                    <th>N</th>
                    <th>User</th>
                    <th>Book Name</th>
                    <th>Format</th>
                    <th>Finished Date</th>
                    <th>Pages</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {finishedBooks.map((finishedBook, index)=>(
                    <tr key={finishedBook._id}>
                      <td>{index+1}</td>
                      <td>{userInfo.username}</td>
                      <td>{finishedBook.finishedBookName}</td>
                      <td>{finishedBook.format}</td>
                      <td>{finishedBook.finishedDate.substring(0, 10)}</td> 
                      <td>{finishedBook.pages}</td>
                      <td>
                        <LinkContainer to={`/main/finishedBook/${finishedBook._id}/update`}>
                          <Button variant="light" className="btn-sm mx-1">
                            <FaEdit />
                          </Button>
                        </LinkContainer>
                        <Button variant="danger" className="btn-sm mx-1" onClick={()=>deleteHandler(finishedBook._id)}>
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

export default FinishedBooksScreen
