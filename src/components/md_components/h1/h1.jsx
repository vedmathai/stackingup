var h1_component = ({node, ...props}) => { 
    console.log('props', props);
    return <>
      <h1 {...props}/>
      <div id={props.children[0]} className="h1-anchor"></div>
    </>
};

export default h1_component;