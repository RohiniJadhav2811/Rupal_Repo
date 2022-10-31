import React from "react";


const post = (props) =>{

    const {posts} = props

    return(
        <div>
            <h3>Question 4</h3>
            {posts.map((posts) => {
                return(
                    <div>
                        <br/>
                        <div>userId:{posts.userId}</div>
                    
                        <div>id:{posts.id}</div>
                    
                        <div>title:{posts.title}</div>
                        
                        <div>body:{posts.body}</div>
                        <br/>
                        
                    </div>
                )
            })}
        </div>
    )
}

export default post