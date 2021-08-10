import React from 'react';
import './App.css';
import Post from './Post'
function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img className="app__headerImage" src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png" alt="" />
      </div>
      <h1>instagram clone with react !!</h1>  
      
      <Post username="Rishabh" caption="caption here" imageUrl="https://www.freecodecamp.org/news/content/images/2019/11/fcc_ghost_publication_cover.png"/>
      <Post username="shsd" caption="done" imageUrl="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" />
      <Post username="jain" caption="react project" imageUrl="https://www.enjpg.com/img/2020/cool-pictures-for-57.jpg" />

    </div>
  );
}

export default App;
