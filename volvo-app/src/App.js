import logo from './logo.png';
import app from './Group 414.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero">
      <img src={logo} alt="React Image" />
      <div className="section1">
      <div className="left">
        <h3> Your car is in your pocket</h3>
        <h1>CONTROL,</h1>
        <h1>CONNECT,</h1>
        <h1>DRIVE.</h1>
        <h3>Experience the future of driving with<br/> seamless control and connectivity.</h3>
        <div className="button">
        <button className="button1">DOWNLOAD ON APP STORE</button>
        <button className="button2">DOWNLOAD ON PLAY STORE </button>
        </div>

      </div>
      <div className="right">
      <img src={app} alt="img" />    
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
