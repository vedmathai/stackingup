import './navitem.css'


function NavItem(props) {
    return (
        <div 
            className="navitem"
            onClick={() => props.onClickFn()}
        >
            {props.label}
        </div>
    );
  }
  
  export default NavItem;
  