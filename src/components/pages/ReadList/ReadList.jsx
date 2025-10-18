import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../../utility/addToDB';


const ReadList = () => {
    const [readlist,setReadlist]=useState([])
    const data = useLoaderData();
console.log(data)

useEffect(()=>{
const storedBookData = getStoredBook();
const ConvertedStoredBooks=storedBookData.map(id=>parseInt(id))
const readList =data.filter(book=>ConvertedStoredBooks.includes(book.bookId)
)
setReadlist(readList)
},[])

    return (
        <div className='min-h-screen'>
              <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
      <h2>{ReadList.length}</h2>
    </TabPanel>
    <TabPanel>
      <h2>kaj cholche 😒</h2>
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default ReadList;