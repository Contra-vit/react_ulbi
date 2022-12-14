import React from 'react'

export default function PostItem(props) {
  return (            
    // console.log(props),
    <div className='post'>

        <div className='post__content'>
          <strong>{props.number}. {props.post.title}</strong>
          <div> {props.post.body}</div>
        </div>
        <div className='post__btns'>
          <button>Delete</button>
        </div>
      </div>
  )  
}

