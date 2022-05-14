import './main-page.css';


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import NavbarsComplex from 'src/components/navbars-complex/navbars-complex'
import RightSideBar from 'src/components/right-side-bar/right-side-bar';
import ReactMarkdown from 'react-markdown'
import id2content_location from 'src/pages/main-page/id2content-location';
import h2_component from 'src/components/md_components/h2/h2';
import pageViewGoogleAnalyticsEvent from 'src/functions/pageViewGoogleAnalyticsEvent';
const axios = require('axios');



var getHeadings = (mdData) => {
  const regexp = /^#{2} (.*)[\n]*/gm;
  const result = mdData.matchAll(regexp);
  return [...result].map(m => m.slice(1));
}

function MainPage() {
  var [mdData, setMdData] = useState('');
  var [headings, setHeadings] = useState([]);
  var { id } = useParams();

  useEffect(() => {
    (async() => {
      var id2content_location_dict = await id2content_location();
      const content_location = id2content_location_dict[id];
      const response = await axios(content_location);
      const content_index = response.data;
      setMdData(content_index);
      pageViewGoogleAnalyticsEvent('content_page' + id);
    }) ();
  }, [id]);

  headings = getHeadings(mdData);
  
  return (
    <div className="App">
        <NavbarsComplex showSideBar={true}/>
        <RightSideBar items={headings}/>
        <div className="content-container">
          <div className="content">
              <ReactMarkdown
                  components={{
                    h2: h2_component
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
