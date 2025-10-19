import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';
import { data } from 'react-router';

const Books = ({ data }) => {
    const [allBooks, setAllBooks] = useState([]);
    //   useEffect(()=>{
    //     fetch("/public/booksData.json")
    //     .then(res =>res.json())
    //     .then(data=>{
    //        setAllBooks(ata)
    //     })
    //   })

    // const bookPromise = fetch('/public/booksData.json').then(res=>res.json())
    return (
        <div>
            <h1 className='text-3xl text-center p-6'> Books</h1>
            <Suspense fallback={<span>
                loading
            </span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        data?.map((bookPromise) => <Book key={bookPromise.bookId
                        } bookPromise={bookPromise}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;