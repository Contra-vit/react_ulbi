import React, { Fragment } from 'react';
import { useState, useRef } from 'react';
import Counter from './Components/Counter';
import ClassCounter from './Components/ClassCounter';
import './stylies/App.css';
import PostList from './Components/PostList';
import MyButton from './Components/ui/button/MyButton';
import MyInput from './Components/ui/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript1', body: 'Description' },
    { id: 2, title: 'JavaScript2', body: 'Description' },
    { id: 3, title: 'JavaScript3', body: 'Description' },
  ])

  // const bodyInputRef = useRef();
  // const [title, setTitle] = useState('')
  // const [body, setBody] = useState('')
  const [post, setPost] = useState({ title:'', body:''})


  const addNewPost = (e) => {
    e.preventDefault()
    // console.log({ title })
    // console.log(bodyInputRef.current.value)
    // const newPost = {
    //   id: Date.now(),
    //   title,
    //   body
    // }
    // console.log(newPost)
  //   setPosts([...posts, newPost])
  //   setTitle('')
  //   setBody('')
      setPosts([...posts,  {...post, id:Date.now()}])

  setPost({title:'', body:''})
  }


  return (

    <div className="App">
      <form>
        {/* <MyInput
          value={title}
          onChange = {e => setTitle(e.target.value)}
          type="text"
          placeholder='name of posts' /> */}

        {/* <input
          ref={bodyInputRef}
          type="text" 
          /> */}

        {/* <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder='descriptions of posts' 
          /> */}
        {/* <MyInput
          value={body}
          onChange = {e => setBody(e.target.value)}
          type="text"
          placeholder='descriptions of posts'
        /> */}

        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder='name of posts' />
        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
          type="text"
          placeholder='name of posts' />

        <MyButton onClick={addNewPost}  >Create post</MyButton>;
      </form>
      <PostList posts={posts} title={'List of JavaScript'} />  {/* закидываем массив posts through props to PostList Component */}
      <Counter />
      <br />
      <ClassCounter />
      <br />

    </div>
  )
}

export default App;
