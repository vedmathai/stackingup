import './main-page.css';


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
import ReactMarkdown from 'react-markdown'
import sample from './sample.md'


function MainPage() {
  var [mdData, setMdData] = useState('');
  const { id } = useParams();
  fetch(sample)
  .then(r => r.text())
  .then(text => {
    setMdData(text);
  });
  return (
    <div className="App">
        <Sidebar/>
        <Navbar/>
        <div className="content-container">
          <div className="content">
              <ReactMarkdown>{mdData}</ReactMarkdown>
          </div>
        </div>
    </div>
  );
}

export default MainPage;
