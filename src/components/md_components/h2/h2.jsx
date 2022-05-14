var h2_component = ({node, ...props}) => { 
    return <>
      <h2 {...props}/>
      <div id={props.children[0]} className="h2-anchor"></div>
    </>
};

export default h2_component;