import {useState, useEffect} from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import {Form, Button, Col, Row} from "react-bootstrap"
import Loader from "../components/Loader"
import Message from "../components/Message"
import FormContainer from "../components/FormContainer"
import { setCredentials } from "../slices/authSlice"
import {toast} from 'react-toastify'
import { useUpdateBookMutation, useGetBookDetailsQuery, useUploadBookImageMutation } from "../slices/booksApiSlice"


const UpdateBookScreen = () => {

    const {userInfo} = useSelector((state)=> state.auth)
    const {id: bookID} = useParams()
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

    const {data: book, isLoaing, refetch, error} = useGetBookDetailsQuery(bookID)

    const [updateBook, {isLoading: loadingUpdate}] = useUpdateBookMutation()

    const [uploadBookImage, {isLoading: loadingUpload} ] = useUploadBookImageMutation()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
        if(book){
            setBookId(book.bookId)
            setTitle(book.title)
            setSubTitle(book.subTitle)
            setAuthor(book.author)
            setCoverImage(book.coverImage)
            setIsbn(book.isbn)
            setPages(book.pages)
            setPublisher(book.publisher)
            setPublicationYear(book.publicationYear)
            setEdition(book.edition)
            setLanguage(book.language)
            setFormat(book.format)
            setGenre(book.gen)
            setCurrentLocation(book.currentLocation)
            setByWhom(book.byWhom)
            setPrice(book.price)
        }
    }, [book])

    const submitHandler = async(e) =>{
        e.preventDefault()
        try {
            const res = await updateBook({
                bookID,
                // bookId,
                title,
                subTitle,
                author,
                coverImage,
                isbn,
                pages,
                publisher,
                publicationYear,
                edition,
                language,
                format,
                genre,
                currentLocation,
                byWhom,
                price
            }).unwrap(); // NOTE: here we need to unwrap the Promise to catch any rejection in our catch block
            toast.success('Book Updated');
            refetch()
            navigate('/main');
          } catch (err) {
            toast.error(err?.data?.message || err.error);
          }
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
      <h1>Update a book</h1>
      
      {loadingUpdate ? <Loader/> : error ? <Message variant='danger'>{error.data.message}</Message>:(
          <Form onSubmit={submitHandler}>
            <Row>
                <Form.Group as={Col} controlId="bookId" className="my-2">
                    <Form.Label>BookId</Form.Label>
                    <Form.Control 
                        type="number"
                        disabled
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
                        type="number"
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
                    <Form.Label>Current Location</Form.Label>
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
                    <Form.Label>By Whom</Form.Label>
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
                        type="number"
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

export default UpdateBookScreen
