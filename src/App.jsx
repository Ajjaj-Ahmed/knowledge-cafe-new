import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import { useState } from 'react'

function App() {

const [bookmarks, setBookmarks] = useState([])

const handleAddBookmark =(blog)=>{
  console.log(blog)
  const newBookmarks =[...bookmarks, blog]
  setBookmarks(newBookmarks)
}

  return (
    <div className='max-w-6xl mx-auto p-5'>
     <Header></Header>
      <main className='md:flex pt-9 gap-4'>
      <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
      <Bookmark bookmarks={bookmarks}></Bookmark>
      </main>
    </div>
  )
}

export default App
