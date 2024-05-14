import "./App.css";
import music from "./assets/images/icon-music.svg";

function App() {
  return (
    <>
      <main>
        <section className="container">
          <div className="img"></div>
          <div className="mini-container">
            <div className="description">
              <h2>Order Summary</h2>
              <p>
                You can now listen to millions of songs, audiobooks, ans
                podcasts on any device anywhere you like!
              </p>
            </div>
            <div className="plan">
              <div className="svg-music">
                <img src={music} alt="music" />
              </div>
              <div className="plan-value">
                <h6>Annual plan</h6>
                <span className="value">$55.99/year</span>
              </div>
              <a href="/" className="change">
                Change
              </a>
            </div>
            <a href="/" className="payment">
              Proceed to Payment
            </a>
            <a href="/" className="cancel">
              Cancel Order
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
