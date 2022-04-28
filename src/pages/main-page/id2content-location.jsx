import axios from 'axios';

var content_index_path = process.env.PUBLIC_URL + '/content/content-index.json';
const content_folder_prefix = process.env.PUBLIC_URL + '/content/page-content/'



const id2content_location = async () => {
    var id2content_location_dict = {};
    const response = await axios(content_index_path);
    const content_index = response.data;
    content_index.map((tree_item_obj) => {
        id2content_location_dict = recursion_helper(tree_item_obj, id2content_location_dict)
    });
    return id2content_location_dict
}

const recursion_helper = (json_obj, id2content_location_dict) => {
    console.log(id2content_location_dict)
    if (json_obj.children) {
        json_obj.children.map((tree_item_json) => {
            id2content_location_dict = recursion_helper(tree_item_json, id2content_location_dict)
        });
    } else {
        id2content_location_dict[json_obj.id] = content_folder_prefix + json_obj.content_location;
    }
    return id2content_location_dict 
}
  
export default id2content_location;
