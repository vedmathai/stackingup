import './button.css'


function Button(props) {
    return (
        <div 
            className="button"
            onClick={() => props.onClickFn()
        }>
            {props.label}
        </div>
    );
  }
  
  export default Button;
  