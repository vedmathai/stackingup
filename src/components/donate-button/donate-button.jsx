
import './donate-button.css'


function DonateButton() {

  const onclick_donate_fn = () => {
    window.open(
        'https://pmny.in/Arx8jfpAOmI4',
        '_blank'
    );
  }

  return (
    <div className="donate-button" onClick={() => onclick_donate_fn()}>
      <div className='donate-button-label'>
        Donate
      </div>
    </div>
  );
}
  
export default DonateButton;
  