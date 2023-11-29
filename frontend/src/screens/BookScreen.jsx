import { useParams } from "react-router-dom"
import { useGetBookDetailsQuery } from "../slices/booksApiSlice"
import { Link } from "react-router-dom"
import Meta from "../components/Meta"
import Loader from "../components/Loader"
import Message from "../components/Message"
import { Row,Col, Image, ListGroup, Card, Button, Form } from "react-bootstrap"
import { FaEdit } from "react-icons/fa"
import { LinkContainer } from "react-router-bootstrap"


const BookScreen = () => {

    const { id: bookId } = useParams()
    const {data: book, isLoading, error} = useGetBookDetailsQuery(bookId);

  return (
    <>
        <Link className="btn btn-light my-3" to="/main">Go back</Link>

        { isLoading ? (
            <Loader/>
        ) : error ? (
            <Message>{ error?.data?.message || error.error }</Message>
        )  : (
            <> 
            <Meta title={book.title}/>
             <Row>
                <Col  xs={6} md={3}>
                    <Image thumbnail src={book.coverImage} alt={book.title} fluid />
                </Col>
                <Col md={5}>
                    <ListGroup variant="flush">
                        <ListGroup.Item> 
                            <h4>Name: "{book.title}"</h4>
                        </ListGroup.Item>
                        {book.subTitle && 
                            <ListGroup.Item> 
                                <h4>"{book.subTitle}"</h4>
                            </ListGroup.Item>
                        }
                        <ListGroup.Item>
                            Author: <strong>{book.author}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            ISBN: <strong>{book.isbn}</strong>  &nbsp; | &nbsp;  Pages: <strong>{book.pages}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Publisher: <strong>{book.publisher}</strong> &nbsp; | &nbsp;   Publication Year: <strong>{book.publicationYear}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Edition: <strong>{book.edition}</strong>  &nbsp; | &nbsp; Language: <strong>{book.language}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Format: <strong>{book.format}</strong> &nbsp; | &nbsp; Genre: <strong>{book.genre}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Currnet Location: <strong>{book.currentLocation}</strong> &nbsp; | &nbsp; By whom: <strong>{book.byWhom}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Price: <strong>{book.price} sums</strong>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={2}>
                
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <LinkContainer to={`/main/book/${book._id}/edit`}>
                                <Button className="btn-block"type="button" ><FaEdit/> Edit Book</Button>
                                </LinkContainer>
                                
                            </Row>
                        </ListGroup.Item>
                    </ListGroup>
                    
                </Col>
            </Row>
            </>
        )}
    </>
  )
}

export default BookScreen
