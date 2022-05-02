
import React, { useState } from "react";
import {init, castVote} from '../web3client.js';
import {Icon} from 'react-icons-kit'
import {trash} from 'react-icons-kit/feather/trash'

export const ArticleList = ({books,deleteBook}) => {
    
    return books.map(book=>(

        <tr key={book.address}>
            <td>{book.address}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td className='delete-btn' onClick={()=>deleteBook(book.address)}>
                <Icon icon={trash}/>
            </td>           
        </tr>       
))

// export const ArticleList = () => {
  
//   return (
//     <div className="table-wrapper">
//     <table>
//       <thead>
//         <tr>
//         <th>Title</th>
//         <th>Link</th>
//         <th>Author</th>                  
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Article 1</td>
//           <td>Link 1</td>
//           <td>Author 1</td>
//         </tr>
//         <tr>
//           <td>Article 2</td>
//           <td>Link 2.</td>
//           <td>Author 2</td>
//         </tr>
//         <tr>
//           <td>Article 3</td>
//           <td>Link 3</td>
//           <td>Author 3</td>
//         </tr>
//         </tbody>
        
//     </table>
//   </div>
//     )
}

export default ArticleList