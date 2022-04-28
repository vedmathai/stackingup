import './button.css'


function Button(props) {
    return (
        <div className="button">
            {props.label}
        </div>
    );
  }
  
  export default Button;
  