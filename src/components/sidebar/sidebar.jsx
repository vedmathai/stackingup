import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import './sidebar.css'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import NavItem from 'src/components/navitem/navitem';
import Button from 'src/components/button/button';
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


var SideBar = (props) => {
    const navigate = useNavigate()
    var [contentIndex, setContentIndex] = useState([]);
    var tree_view;

    const onclick_about_fn = () => {
        navigate(`/about`);
    }

    const onclick_donate_fn = () => {
        navigate(`/donate`);
    }

    var visibleClass = props.openMenuStatus? "sidebar-visible": "sidebar-hidden";
    var largeScreenVisibleClass = props.showSideBar? "": "sidebar-hidden-large-screen";

    tree_view = json2treeview(contentIndex);
    var sidebar = <div className="sidebar-treeview-container">
        <div className="contents-heading">Contents</div>
        {tree_view}
    </div>;

    useEffect(() => {
        (async() => {
            const response = await axios(content_index_path);
            var content_index = response.data;
            setContentIndex(content_index);
        }) ();
    }, []);

    return (
        <div className={"sidebar " + visibleClass + " " + largeScreenVisibleClass}>
            <div className="mobile-nav-sidebar">
                <div className="mobile-nav-sidebar-navitem">
                    <NavItem label="About" onClickFn={onclick_about_fn}></NavItem>
                </div>
                <div className="mobile-nav-sidebar-navitem">
                    <Button label="Donate" onClickFn={onclick_donate_fn}></Button>
                </div>
            </div>
            {sidebar}
        </div>
    );
  }
  
  export default SideBar;
  