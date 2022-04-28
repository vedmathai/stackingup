import './sidebar.css'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import { useState, useEffect } from 'react';
const axios = require('axios');

var content_index_path = process.env.PUBLIC_URL + '/content/content-index.json';


const json2treeview = (json_obj) => {
    var tree_items = [];
    tree_items = json_obj.map((tree_item_obj) => {
        return json2treeitems(tree_item_obj)
    });
    return <TreeView
        aria-label="multi-select"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        multiSelect
    >
        {tree_items} 
    </TreeView>
}

const json2treeitems = (json_obj) => {
    if (json_obj.children) {
        var tree_items = json_obj.children.map((tree_item_json) => {
            return json2treeitems(tree_item_json);
        });
        return <TreeItem className='tree-item' nodeId={json_obj.display_name} label={json_obj.display_name}> {tree_items} </TreeItem>
    } else {
        return <TreeItem className='tree-item' nodeId={json_obj.display_name} label={json_obj.display_name}></TreeItem> 
    }
}


function SideBar() {
    var [contentIndex, setContentIndex] = useState([]);
    var tree_view;
    useEffect(() => {
        (async() => {
            const response = await axios(content_index_path);
            var content_index = response.data;
            setContentIndex(content_index);
        }) ();
    }, []);
    tree_view = json2treeview(contentIndex);
    return (
      <div className="sidebar">
        
        <div className="sidebar-treeview-container">
            <div className="contents-heading">Contents</div>
            {tree_view}
        </div>
      </div>
    );
  }
  
  export default SideBar;
  