import './sidebar.css'
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';


const json2treeview = (json_obj) => {
    var tree_items = [];
    tree_items = json_obj.map((tree_item_obj) => {
        return json2treeitems(tree_item_obj)
    });
    console.log(tree_items);
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
    console.log(json_obj)
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
    var content_index = require('content/content-index.json');
    var tree_view = json2treeview(content_index);
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
  