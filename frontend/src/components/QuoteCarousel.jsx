import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useGetQuotesQuery } from '../slices/quotesApiSlice';
import Message from './Message';

const QuoteCarousel = () => {

  const {data: quotes, isLoading, error} = useGetQuotesQuery();

  // const [quotes, setQuotes] = useState([
  //   { quote: 'Quote 1', book: 'Book 1', author: 'Author 1' },
  //   { quote: 'Quote 2', book: 'Book 2', author: 'Author 2' },
  //   { quote: 'Quote 3', book: 'Book 3', author: 'Author 3' },
  //   // Add more quotes as needed
  // ]);

  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setIndex((prevIndex) => (prevIndex + 1) % quotes.length);
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, [quotes.length]);

  return isLoading ? null : error ? (
    <Message variant="danger"> {error?.data?.message} || error.error</Message>
  ):(
    <Carousel slide={false} pause='hover' data-bs-theme="dark" indicators={false} className='bg-light my-4 py-2 text-center'>
      {quotes.map((quote) => (
        <Carousel.Item className='mx-auto ' key={quote._id} interval={5000}>
          <strong ><p> "{quote.quote}"</p></strong>
          <p>- <strong>{quote.book !== null ? quote.book : "Uknown"}</strong> , {quote.authorOfQoute !== null ? quote.authorOfQoute : "Uknown"}</p>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default QuoteCarousel;
