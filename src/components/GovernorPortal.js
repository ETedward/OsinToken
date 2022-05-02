import React,{useState, useEffect} from 'react'
import {ArticleList} from '../components/ArticleList'

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const GovernorPortal = () => {

  // main array of objects state || article state || article array of objects
  const [books, setbooks]=useState(getDatafromLS());

  // input field states
  const [title, setTitle]=useState('');
  const [author, setAuthor]=useState('');
  const [address, setAddress]=useState('');

  // form submit event
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      title,
      author,
      address
    }
    setbooks([...books,book]);
    setTitle('');
    setAuthor('');
    setAddress('');
  }

  // delete book from LS
  const deleteBook=(address)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.address !== address
    })
    setbooks(filteredBooks);
  }

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  return (
    <div className='wrapper'>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <label>Investigation Title</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <br></br>
            <label>Author(s)</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setAuthor(e.target.value)} value={author}></input>
            <br></br>
            <label>Linked Wallet Address</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setAddress(e.target.value)} value={address}></input>
            <br></br>
            <button type="submit" className='btn btn-success btn-md'>
              Submit Nomination
            </button>
          </form>
        </div>

        {/* <div className='view-container'>
          {books.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>ISBN#</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <ArticleList books={books} deleteBook={deleteBook}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setbooks([])}>Remove All</button>
          </>}
          {books.length < 1 && <div>No books are added yet</div>}
        </div> */}

      </div>
    </div>
  )
}

export default GovernorPortal