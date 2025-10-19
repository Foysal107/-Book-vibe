import React, { use } from 'react';
import {  FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';
const Book = ({bookPromise}) => {
const {author,
bookName,
category
,
image
,
tags,
review
,yearOfPublishing,
rating,
publisher,
bookId,
}=bookPromise;
    // const data = use(bookPromise);
    console.log(bookPromise)
    return (
     <Link to={`/bookDetails/${bookId}`}>
       <div className="card bg-base-100 w-96 shadow-sm border p-5 rounded-xl">
  <figure className='p-7 bg-gray-200 w-2/3 mx-auto rounded-xl'>
    <img
    className='h-[166px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
   <div className='flex justify-center gap-5'>
     {
        tags?.map(tags=><button>{tags}</button>)
    }
   </div>
    <h2 className="card-title">
     {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    Book by : {publisher}
    <div className='border-t-2 border-dashed'></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<FaStarHalfAlt /></div>
    </div>
  </div>
</div>
     </Link>
    );
};

export default Book;