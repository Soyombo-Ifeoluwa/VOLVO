import logo from "./logo.png";
import playstore from "./Group 415.png";
import appstore from "./Group 448.png";
import features from "./Group 450.png";
import logo2 from "./logo (1).png";
// import social from "./Group 430.png";
import app from "./Group 414.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="hero">
        <img src={logo} alt="React Image" className="img" />
        <div className="section1">
          <div className="left">
            <h3> Your car is in your pocket</h3>
            <h1>CONTROL,</h1>
            <h1>CONNECT,</h1>
            <h1>DRIVE.</h1>
            <h3>
              Experience the future of driving with
              <br /> seamless control and connectivity.
            </h3>
            <div className="button">
              <img src={playstore} alt="React Image" />
              <img src={appstore} alt="React Image" className="img" />
            </div>
          </div>
          <div className="right">
            <img src={app} alt="img" />
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="sub-sec">
          <h2 className="h2">FEATURES OVERVIEW</h2>
          <img src={features} alt="React Image" className="image" />
        </div>
        <div>
          <p className="p">Download the app to see more feature!!!</p>
        </div>
      </div>
      <div className="section3">
        <div className="sub-sec">
          <h3>WHY USE THE APP?</h3>
          <div className="container">
            <div className="items">
              <h5>Convenience</h5>
              <p>
                With the Volvo app, you can lock or unlock your doors, start
                your engine, adjust climate control form your phone, ensuring
                your car is always ready when you are
              </p>
            </div>
            <div className="items">
              <h5>Convenience</h5>
              <p>
                With the Volvo app, you can lock or unlock your doors, start
                your engine, adjust climate control form your phone, ensuring
                your car is always ready when you are
              </p>
            </div>
            <div className="items">
              <h5>Convenience</h5>
              <p>
                With the Volvo app, you can lock or unlock your doors, start
                your engine, adjust climate control form your phone, ensuring
                your car is always ready when you are
              </p>
            </div>
            <div className="items">
              <h5>Convenience</h5>
              <p>
                With the Volvo app, you can lock or unlock your doors, start
                your engine, adjust climate control form your phone, ensuring
                your car is always ready when you are
              </p>
            </div>
          </div>
        </div>
        <div className="copy"> <p>@ copyright SIR-2025</p></div>
      </div>
    
    </div>
  );
}

export default App;
