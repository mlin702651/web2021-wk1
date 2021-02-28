import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <header >
      <div className="all">
    <div className="G1">
      <div className="firstblock">
        <div className="tit">
          <p>WELCOME<br />TO<br />CHOCO</p>
        </div>

        <div className="line1"></div>

        <input type="button" value="login" className="login" onclick="window.location='./loginpage.html'"></input>

        <div className="icon">
          <img className="fb" src="./images/facebook_icon.png" alt="back" width="38px"
            onmouseout="this.src='images/facebook_icon.png'" onmouseover="this.src='images/icons8-facebook-100.png'"
            onclick="setBanner(); showFlag(); "></img>

          <img className="ig" src="./images/ig_icon.png" alt="back" width="38px"
            onmouseout="this.src='./images/ig_icon.png'" onmouseover="this.src='images/icons8-instagram-52.png'"
            onclick="setBanner(); showFlag(); "></img>

          <img className="li" src="./images/line_icon.png" alt="back" width="38px"
            onmouseout="this.src='./images/line_icon.png' " onmouseover="this.src='./images/icons8-line-50.png'"
            onclick="setBanner(); showFlag(); "></img>
        </div>

      </div>

      <div className="secondblock">
        <img className="pic" src="./images/P1-01.png" width="707px"></img>
      </div>

    </div>
    <div className="yellow1"></div>
    <div className="yellow2"></div>
    <div className="yellow3">

      <div className="set">
        <img id="c1p" src="./images/lolipop.jpg" width="300px"></img>
        <img id="c2p" src="./images/haribo.png" width="300px"></img>
        <img id="c3p" src="./images/milkcandy.jpg" width="300px"></img>
        <img className="mar" src="./images/P1-02.png"></img>
      </div>

    </div>
    <div className="yellow4">
      <img className="choco" src="./images/P1-03.png"></img>
    </div>
    <div className="yellow5"></div>
    <div className="yellow6">
      <img className="cookie" src="./images/P1-04.png"></img>
    </div>
    <div>
      <h2 className="can">CANDY</h2>
      <div className="candybox">

        <div id="c1">
          <p>lolipop</p>
        </div>
        <div id="c2">
          <p>haribo</p>
        </div>
        <div id="c3">
          <p>milk candy</p>
        </div>
      </div>

      <div className="word1"></div>
      <input type="button" value="BUY" class="buy1" onclick="window.location='./01.html'"></input>
    </div>

    <div>
      <div className="word2"></div>
      <h2 className="cho">CHOCOLATE</h2>
      <div className="chocolatebox">
        <p>godiva</p>
        <p>m&m</p>
        <p>meiji</p>
      </div>
      <input type="button" value="BUY" class="buy2"></input>
    </div>

    <div>
      <div className="word3"></div>
      <h2 className="coo">COOKIE</h2>
      <div className="cookiebox">
        <p>egg roll</p>
        <p>oreo</p>
        <p>pocky</p>
      </div>
      <input type="button" value="BUY" class="buy3"></input>
    </div>
  </div>
      </header>
    </div>
  );
}

export default App;
