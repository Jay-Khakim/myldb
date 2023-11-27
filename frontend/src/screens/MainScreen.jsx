import { useEffect, useState } from 'react'
import { useGetBooksQuery } from '../slices/booksApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {Row, Col, Table, Button} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"


const MainScreen = () => {
  const {data: books, isLoading, error} = useGetBooksQuery()


  console.log(books)
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
          <h1>Books DB</h1>
          <Row>
            {books.map((book)=>(
                <Table striped hover responsice className="table-sm">
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
                      <td>{book.language && book.language}</td>
                      <td>{book.genre}</td> 
                      
                      <td>{book.byWhom } </td>
        
                      <td>{book.price } 
                      </td>
        
                      <td>
                        <LinkContainer to={`/books/${book._id}`}>
                          <Button variant="light" className="btn-sm">Details</Button>
                        </LinkContainer>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ))}
          </Row>
        </>
      )}

    </>
  )
}

export default MainScreen
