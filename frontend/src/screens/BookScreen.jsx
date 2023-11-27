import { useParams } from "react-router-dom"
import { useGetBookDetailsQuery } from "../slices/booksApiSlice"
import { Link } from "react-router-dom"

const BookScreen = () => {

    const { id: bookId } = useParams()
    const {data: book, isLoading, error} = useGetBookDetailsQuery(bookId);
  return (
    <>
        <Link className="btn btn-light my-3" to="/main">Go back</Link>

        { isLoading ? (
            <h2>Loading...</h2>
        ) : error ? (
            <div>{ error?.data?.message || error.error }</div>
        )  : (
            <h2>{book.name}</h2>
        )}
    </>
  )
}

export default BookScreen
