import './main-page.css';

import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';


function MainPage() {
  return (
    <div className="App">
        <Sidebar/>
        <Navbar/>

        <header className="App-header">
            <p>
            Welcome to Stacking up by Ved Mathai
            </p>
        </header>
    </div>
  );
}

export default MainPage;
