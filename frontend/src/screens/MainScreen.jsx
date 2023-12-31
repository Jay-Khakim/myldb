import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetBooksQuery, useDeleteBookMutation } from '../slices/booksApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'
import QuoteCarousel from '../components/QuoteCarousel'
import {Row, Col, Table, Button} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import {FaTimes, FaTrash, FaEdit, FaCheck} from 'react-icons/fa';
import {toast} from "react-toastify"



const MainScreen = () => {
  const {data: books, isLoading, error, refetch} = useGetBooksQuery()

  const [deleteBook, {isLoading: loadingDelete}] = useDeleteBookMutation()

  const navigate = useNavigate()

  const editHandler = async ()=>{
    console.log("Edited")
  }
  const deleteHandler = async (id)=>{
    if(window.confirm('Are you sure that you want to delete a book?')){
        try {
           await deleteBook(id);
           refetch()
           toast.success("Book deleted successfully")
        } catch (err) {
            toast.error(err?.data?.message || err.error)
        }
    }
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
        <QuoteCarousel/>
          {/* <h1>Books of Khakimjonovs Liblary</h1> */}
          <Row className='align-items-center'>
            <Col>
              <h3>Number of books - <strong>{books.length}</strong></h3>
            </Col>
            <Col xs="auto">
              <LinkContainer to={"/main/book/create"}>
                <Button variant="primary">Add a New Book</Button>
              </LinkContainer>
            </Col>
          </Row>
          
          <Row>
           
                <Table striped hover responsive className="table-sm">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Book Name</th>
                    <th>Language</th>
                    <th>Genre</th>
                    <th>By Whom</th>
                    <th>Price (sums)</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book)=>(
                    <tr key={book._id}>
                      <td>{book.bookId}</td>
                      <td>{book.title}</td>
                      <td>{book.language}</td>
                      <td>{book.genre}</td> 
                      <td>{book.byWhom}</td>
                      <td>{book.price}</td>
        
                      <td>
                        <LinkContainer to={`/main/book/${book._id}`}>
                          <Button variant="light" className="btn-sm">Details</Button>
                        </LinkContainer>
                        <LinkContainer to={`/main/book/${book._id}/update`}>
                          <Button variant="light" className="btn-sm mx-1">
                            <FaEdit />
                          </Button>
                        </LinkContainer>
                        <Button variant="danger" className="btn-sm mx-1" onClick={()=>deleteHandler(book._id)}>
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

export default MainScreen
