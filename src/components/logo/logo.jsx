import './logo.css'
import HouseOfCardsLogo from './house-of-cards-logo';


function Logo(props) {
    return (
        <span className="logo" onClick={() => props.onClickFn()}>
            <span className="stackingup-logo">
                <HouseOfCardsLogo/>
            </span>
            <span className="logo-text">
                Stacking Up
            </span>
        </span>
    );
}
  
export default Logo;
