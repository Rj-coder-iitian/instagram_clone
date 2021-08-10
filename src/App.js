import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {

    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
  }, []);

  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="" />
      </div>
      <h1>instagram clone with react !!</h1>  
      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

    </div>
  );
}

export default App;

// {
//   username:"Rishabh",
//   caption:"caption here",
//   imageUrl:"https://www.freecodecamp.org/news/content/images/2019/11/fcc_ghost_publication_cover.png"
// },
// { 
//   username:"ashdsuh",
//   caption:"caption here",
//   imageUrl:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
// },
// { 
//   username:"jain",
//   caption:"caption here",
//   imageUrl:"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg"
// }