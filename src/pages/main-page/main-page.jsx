import './main-page.css';


import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from 'components/navbar/navbar';
import Sidebar from 'components/sidebar/sidebar';
import RightSideBar from 'components/right-side-bar/right-side-bar';
import ReactMarkdown from 'react-markdown'
import h1_component from 'components/md_components/h1/h1';
import sample from './sample.md'

var getHeadings = (mdData) => {
  const regexp = /^#{1} (.*)[\n]*/gm;
  const result = mdData.matchAll(regexp);
  return [...result].map(m => m.slice(1));
}

function MainPage() {
  var [mdData, setMdData] = useState('');
  const { id } = useParams();
  fetch(sample)
  .then(r => r.text())
  .then(text => {
    setMdData(text);
  });
  var headings = getHeadings(mdData);
  return (
    <div className="App">
        <Sidebar/>
        <Navbar/>
        <RightSideBar items={headings}/>
        <div className="content-container">
          <div className="content">
              <ReactMarkdown
                  components={{
                    h1: h1_component
                  }}
              >
                {mdData}
              </ReactMarkdown>
          </div>
        </div>
        <RightSideBar items={headings}/>
    </div>
  );
}

export default MainPage;
