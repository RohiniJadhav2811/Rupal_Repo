import React, { useState, Fragment } from 'react';
import { Table} from 'react-bootstrap';
import data from './book-data1.json';
import './post.css';
import ReadOnlyRow from './ReadOnlyRow';

const AddHotel = () => {
    const [posts, setPosts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        id: '',
        name: '',
        address: '',
        rating: '',
        email: ''
    });
    const handlAddFormChange = (e) => {
        e.preventDefault();
        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;
        const newFormData = { ...addFormData};
        newFormData[fieldName ] = fieldValue;
        setAddFormData(newFormData);
    };
    const handleAddFormSubmit = (e) =>{
        e.preventDefault();
        const newPost = {
            id: addFormData.id,
            name: addFormData.name,
            address: addFormData.address,
            rating: addFormData.rating,
            email: addFormData.email
        };
        const newPosts = [...posts, newPost];
        setPosts(newPosts);
    };
    const handleDeleteClick = (postId) =>{
        const newPosts = [ ...posts];
        const index = posts.findIndex((post) => post.id === postId);
        newPosts.splice(index, 1);
        setPosts(newPosts)
    }
  return (
    <div>
        <h1>Cancel Reservation</h1>
      <div className="container">
        <form>
       <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Rating</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
               {posts.map((post) => (
                <Fragment>
                    {
                     <ReadOnlyRow post={post} 
                    handlAddFormChange={handlAddFormChange}
                    handleAddFormSubmit={handleAddFormSubmit}
                    handleDeleteClick={handleDeleteClick}/>}
                </Fragment>
               ))}
            </tbody>
            </Table>
        </form>
    </div>
    </div>
  )
}

export default AddHotel