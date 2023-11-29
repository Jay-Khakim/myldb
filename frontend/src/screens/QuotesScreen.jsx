
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useGetBooksQuery, useDeleteBookMutation } from '../slices/booksApiSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'
import {Row, Col, Table, Button, Card, Form} from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap"
import {FaTimes, FaTrash, FaEdit, FaCheck} from 'react-icons/fa';
import {toast} from "react-toastify"
import { useGetQuotesQuery, useAddQuoteMutation } from '../slices/quotesApiSlice'


const Quotes = () => {

  const {userInfo} = useSelector((state)=> state.auth)
  const user = userInfo._id

  const [quoteText, setQuoteText] = useState()
  const [book, setBook] = useState()
  const [authorOfQuote, setAuthorOfQuote] = useState()

  const {data: quotes, isLoading, refetch, error} = useGetQuotesQuery()

  const [addQuote, {isLoading: loadingAddQuote}] = useAddQuoteMutation()

  const deleteHandler = async(e)=>{
    console.log("deleted")
  }

  const addQuoteHandler = async(e)=>{
    e.preventDefault()
    try {
      await addQuote({
        user,
        quoteText,
        book,
        authorOfQuote
      }).unwrap()
      refetch()
      toast.success('Quote Added');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
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
          <h1>Quotes</h1>
          <Row className='align-items-center'>
            <Col>
              <h3>Number of books - <strong>{quotes.length}</strong></h3>
            </Col>
            <Col xs="auto">
              {/* <LinkContainer to={"/main/book/create"}>
                <Button variant="primary">Add a New Book</Button>
              </LinkContainer> */}
            </Col>
          </Row>
          
          <Row>
           <Col md={8}>
            <Table striped hover responsive className="table-sm">
                  <thead>
                    <tr>
                      <th>N</th>
                      <th>Quote</th>
                      <th>Book</th>
                      <th>Author of Quote</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {quotes.map((quote, index)=>(
                      <tr key={quote._id}>
                        <td>{index+1}</td>
                        <td>{quote.quote}</td>
                        <td>{quote.book}</td>
                        <td>{quote.authorOfQoute}</td> 
          
                        <td>
                          <LinkContainer to={`/main/book/${quote._id}/update`}>
                            <Button variant="light" className="btn-sm mx-1">
                              <FaEdit />
                            </Button>
                          </LinkContainer>
                          <Button variant="danger" className="btn-sm mx-1" onClick={()=>deleteHandler(quote._id)}>
                            <FaTrash  style={{color: "white"}}/>
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
            </Table>
           </Col>

           <Col md={4}>
            <Card className='p-4'>
              
              <Form onSubmit={addQuoteHandler}>
                <Form.Group controlId='quoteText' className='my-3'>
                    <Form.Label>Quote Text</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter quote'
                        value={quoteText}
                        onChange={(e) => setQuoteText(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='book' className='my-3'>
                    <Form.Label>Book</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter book name'
                        value={book}
                        onChange={(e) => setBook(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='authorOfQuote' className='my-3'>
                    <Form.Label>Author Of Quote</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter Author Of Quote'
                        value={authorOfQuote}
                        onChange={(e) => setAuthorOfQuote(e.target.value)}>
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary' className="mt-2" disabled={ isLoading}>
                    Add Quote
                </Button>

                {isLoading && <Loader />}
            </Form>
              
            </Card>
           </Col>
              

          </Row>
        </>
      )}
    </>
  )
}

export default Quotes
