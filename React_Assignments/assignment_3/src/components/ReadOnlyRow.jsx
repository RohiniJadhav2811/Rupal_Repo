import React from 'react';
import {Button} from 'react-bootstrap'

const ReadOnlyRow = ({post, handleDeleteClick}) => {
  return (

         <tr>
            <td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.address}</td>
            <td>{post.rating}</td>
            <td>{post.email}</td>
            <td>
                <Button variant="danger" type="button" onClick={(e) => handleDeleteClick(e, post)}>Cancel</Button>
            </td>
        </tr> 
  )
}

export default ReadOnlyRow
