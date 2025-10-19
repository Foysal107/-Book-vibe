import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../components/pages/Root/Root';
import Error from '../components/pages/Errorpage/Error';
import Home from '../components/pages/Home/Home';
import About from '../components/pages/About/About';
import BookDetails from '../components/pages/BookDetails/BookDetails';
import ReadList from '../components/pages/ReadList/ReadList';


export const router = createBrowserRouter([
  {
    path: "/",
   Component:Root,
   errorElement:<Error></Error>,
   children:[{

    index:true,
    loader:()=>fetch('/public/booksData.json'),
    path:"/Home",
    Component:Home
   },
   {
    path:'/about',
    Component:About
   },
   {
    path:'readlist',
     loader:()=>fetch('/public/booksData.json'),
    Component:ReadList
   },
   {
    path:'/bookDetails/:id',
     loader:()=>fetch('/public/booksData.json'),
    Component:BookDetails
   }


   ]
    


  },
]);