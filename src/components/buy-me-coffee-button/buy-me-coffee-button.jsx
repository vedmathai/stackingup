
import './buy-me-coffee-button.css'
import BuyMeCoffeeLogo from './buy-me-coffee-logo'


function BuyMeCoffeeButton() {

  const onclick_buy_me_coffee_fn = () => {
    console.log('ved');
    window.open(
        'https://www.buymeacoffee.com/vedmathai',
        '_blank'
    );
  }

  return (
    <div className="buy-me-coffee-button" onClick={() => onclick_buy_me_coffee_fn()}>
      <div className='buy-me-coffee-logo-container'>
        <BuyMeCoffeeLogo />
      </div>
      <div className='buy-me-coffee-button-label'>
        Buy me a Coffee
      </div>
    </div>
  );
}
  
  export default BuyMeCoffeeButton;
  