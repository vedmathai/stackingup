import './main-page.css';


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Navbar from 'src/components/navbar/navbar';
import Sidebar from 'src/components/sidebar/sidebar';
import RightSideBar from 'src/components/right-side-bar/right-side-bar';
import ReactMarkdown from 'react-markdown'
import id2content_location from 'src/pages/main-page/id2content-location';
import h1_component from 'src/components/md_components/h1/h1';
const axios = require('axios');



var getHeadings = (mdData) => {
  const regexp = /^#{1} (.*)[\n]*/gm;
  const result = mdData.matchAll(regexp);
  return [...result].map(m => m.slice(1));
}

function MainPage() {
  var [mdData, setMdData] = useState('');
  var [headings, setHeadings] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    (async() => {
      var id2content_location_dict = await id2content_location();
      console.log("id2content_location_dict", id2content_location_dict);
      const content_location = id2content_location_dict[id];
      const response = await axios(content_location);
      const content_index = response.data;
      setMdData(content_index);
    }) ();
  }, []);

  headings = getHeadings(mdData);
  
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
    </div>
  );
}

export default MainPage;
