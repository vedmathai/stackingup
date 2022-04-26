import './logo.css'
import HouseOfCardsLogo from './house-of-cards-logo';


function Logo() {
    return (
        <span className="logo-container">
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
