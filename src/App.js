import React from 'react';
import { useState } from 'react';
import Counter from './Components/Counter';
import ClassCounter from './Components/ClassCounter';
import    './stylies/App.css';
import PostList from './Components/PostList';

function App() {
const [posts, setPost] = useState( [
  {id:1, title: 'JavaScript1', body:'Description'},
  {id:2, title: 'JavaScript2', body:'Description'},
  {id:3, title: 'JavaScript3', body:'Description'},
])

const [posts2, setPost2] = useState( [
  {id:1, title: 'Python1', body:'Description'},
  {id:2, title: 'Python2', body:'Description'},
  {id:3, title: 'Python3', body:'Description'},
])

  return (
    <div className="App">
      <PostList posts = {posts} title = {'List of JavaScript'}/>  {/* закидываем массив posts through props to PostList Component */}
      <PostList posts = {posts2} title = {'List of Python'}/> 
      {/* <PostItem post={{id:1, title: 'JavaScript', body:'Description'}} /> */}

<Counter/>
 <br/>
<ClassCounter/> 

  
  
     
  </div>
   );
}

export default App;
