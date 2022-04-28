import './right-side-bar.css'


function RightSideBar(props) {
    var items = props.items.map((item) => {
        var link = '#' + item;
        return <div className='right-side-bar-item'>
            <a href={link}>{item}</a>
        </div>
    })
    return (
        <div className="right-side-bar">
            {items}
        </div>
    );
  }
  
  export default RightSideBar;
  