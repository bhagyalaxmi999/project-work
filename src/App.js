import React from 'react'
import './App.css';
import Comment  from './component/Comment';
import Footer from './component/Footer';
import Menu from './component/Menu';
import Subs from './component/Subs'


// react functional component

function App() {
  return (
    <div className="container">
      <Menu/>
      <Subs/>
      <Comment/>
      <Footer/>
    </div>
  );
}

export default App;
