import './navitem.css'


function NavItem(props) {
    return (
        <div className="navitem">
            {props.label}
        </div>
    );
  }
  
  export default NavItem;
  