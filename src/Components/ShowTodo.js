import React from 'react'

function ShowTodo(props) {
    return (
        <div className='container'>
           

                
                    <h6>{props.task}</h6>
                
                
            <button onClick={()=>{
                    props.onSelcet(props.id)
                }}>X</button>
                </div>
         
            
      
    )
}

export default ShowTodo
