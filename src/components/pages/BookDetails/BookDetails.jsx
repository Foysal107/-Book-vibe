import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../../utility/addToDB';

const BookDetails = () => {
    const {id}=useParams();
    const bookId =parseInt(id)
   const data = useLoaderData();
   const singleBook = data.find(book =>book.bookId ===bookId);
  const {author,
bookName,
category
,
image
,
tags,
review
,
totalPages,
yearOfPublishing,
rating,
publisher,
}=singleBook ||{};


const handleMarkAsRead=id=>{
addToStoredDB(id)
}
    return (
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl p-12 border  bg-gray-400"
    />
    <div className=''>
      <h1 className="text-5xl font-bold m-3">{bookName}</h1>
      <h2>
        By : {author}
      </h2>
     
      <h1 className='border-2 mt-3'></h1>
       <h1 className='mt-3'>{category}</h1>
      <p className='border-2 mt-3 '></p>
      <h2 className='mt-3'>
        <span>
            Review :
        </span>{review}
      </h2>
      <h2 className='flex gap-7 text-green-300 m-3'>
        <span className='text-blue-400'>Tag</span>
         {
        tags.map(tags=><button>{tags}</button>)
    }
        </h2> 
        <h1 className='border-1'></h1>
    

      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
     






 <button onClick={()=>handleMarkAsRead(id)} className="btn btn-dash btn-secondary m-4" >Mark as Read</button>
<button className="btn btn-dash btn-accent"> Add To WishList</button>
    </div>
  </div>

  
</div>
    );
};

export default BookDetails;