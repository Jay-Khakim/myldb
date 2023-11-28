import {useState, useEffect} from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import {Form, Button, Col, Row} from "react-bootstrap"
import Loader from "../components/Loader"
import Message from "../components/Message"
import FormContainer from "../components/FormContainer"
import {toast} from 'react-toastify'
import { useAddBookMutation, useUploadBookImageMutation } from "../slices/booksApiSlice"
import { useGetAuthorsQuery } from "../slices/authorApiSlice"


const AddBookScreen = () => {

    const {userInfo} = useSelector((state)=> state.auth)
    // const {id: userId} = useParams()
    const [bookId, setBookId] = useState('')
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [isbn, setIsbn] = useState('');
    const [pages, setPages] = useState('');
    const [publisher, setPublisher] = useState('');
    const [publicationYear, setPublicationYear] = useState('');
    const [edition, setEdition] = useState('');
    const [language, setLanguage] = useState('')
    const [format, setFormat] = useState('')
    const [genre, setGenre] = useState('')
    const [currentLocation, setCurrentLocation] = useState('')
    const [byWhom, setByWhom] = useState('')
    const [price, setPrice] = useState('')
    // const [quote, setQuote] = useState('')

    const [addBook, {isLoading: loadingAdd}, error] = useAddBookMutation()

    const [uploadBookImage, {isLoading: loadingUpload} ] = useUploadBookImageMutation()

    const {data: authors, isLoading: loadingAuthors } = useGetAuthorsQuery()
    console.log(authors)
    const navigate = useNavigate()

    const submitHandler = async(e) =>{
        e.preventDefault()
        console.log("Added")
    }

    const uploadFileHandler = async (e) => {
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        try {
          const res = await uploadBookImage(formData).unwrap();
          toast.success(res.message);
          setCoverImage(res.image);
        } catch (err) {
          toast.error(err?.data?.message || err.error);
        }
      };

  return  <>
  <Link to='/main' className="btn btn-light my-3">Go Back</Link>

  <FormContainer>
      <h1>Add a book</h1>
      
      {loadingAdd ? <Loader/> : error ? <Message variant='danger'>{error.data.message}</Message>:(
          <Form onSubmit={submitHandler}>
            <Row>
                <Form.Group as={Col} controlId="bookId" className="my-2">
                    <Form.Label>BookId</Form.Label>
                    <Form.Control 
                        type="number"
                        placeholder="Enter bookId"
                        value={bookId}
                        onChange={(e) => setBookId(e.target.value)}>
                        
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="author" className="my-2">
                  <Form.Label>Author</Form.Label>
                  <Form.Control 
                      type="text"
                      placeholder="Enter author"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}>
                      
                  </Form.Control>
              </Form.Group>
            </Row>
              
            <Row>
                <Form.Group as={Col} controlId="title" className="my-2">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}>
                        
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="subTitle" className="my-2">
                    <Form.Label>SubTitle</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter subTitle"
                        value={subTitle}
                        onChange={(e) => setSubTitle(e.target.value)}>
                        
                    </Form.Control>
                </Form.Group>
            </Row>
            
            <Form.Group controlId='coverImage' className="my-2">
                <Form.Label>CoverImage</Form.Label>
                <Form.Control
                    type='text'
                    placeholder="Enter coverImage url"
                    value={coverImage}
                    onChange={(e)=>setCoverImage}>
                </Form.Control>
                <Form.Control 
                    type="file" 
                    label="Choose file" 
                    onChange={uploadFileHandler}
                    ></Form.Control>
            </Form.Group>
            {loadingUpload && <Loader/>}

            <Row>
            <Form.Group as={Col} controlId="isbn" className="my-2">
                <Form.Label>Isbn</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Enter isbn"
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}>
                    
                </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="pages" className="my-2">
                <Form.Label>Pages</Form.Label>
                <Form.Control 
                    type="number"
                    placeholder="Enter pages"
                    value={pages}
                    onChange={(e) => setPages(e.target.value)}>
                    
                </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="publisher" className="my-2">
                <Form.Label>Publisher</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Enter publisher"
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}>
                    
                </Form.Control>
            </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="publicationYear" className="my-2">
                    <Form.Label>PublicationYear</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter publicationYear"
                        value={publicationYear}
                        onChange={(e) => setPublicationYear(e.target.value)}>
                        
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="edition" className="my-2">
                    <Form.Label>Edition</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter edition"
                        value={edition}
                        onChange={(e) => setEdition(e.target.value)}>
                        
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="language" className="my-2">
                    <Form.Label>Language</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}>
                        
                    </Form.Control>
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col} controlId="format" className="my-2">
                    <Form.Label>Format of Book</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter format"
                        value={format}
                        onChange={(e) => setFormat(e.target.value)}>
                        
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="genre" className="my-2">
                    <Form.Label>Genre of Book</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter genre"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}>
                        
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="currentLocation" className="my-2">
                    <Form.Label>CurrentLocation</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter currentLocation"
                        value={currentLocation}
                        onChange={(e) => setCurrentLocation(e.target.value)}>
                        
                    </Form.Control>
                </Form.Group>
            </Row>

            <Row>
                <Form.Group as={Col}  controlId="byWhom" className="my-2">
                    <Form.Label>ByWhom</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter byWhom"
                        value={byWhom}
                        onChange={(e) => setByWhom(e.target.value)}>
                        
                    </Form.Control>
                </Form.Group>

                <Form.Group as={Col}  controlId="price" className="my-2">
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                        type="text"
                        placeholder="Enter price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}>
                        
                    </Form.Control>
                </Form.Group>
            </Row>

              <Button type="submit" variant="primary" className="my-2"  >
                  Add
              </Button>
          </Form>
      ) }
  </FormContainer>
  </>
}

export default AddBookScreen
