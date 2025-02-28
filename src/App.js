import logo from './logo.svg';
import oiiai from './oiiai.gif';
import './App.css';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={oiiai} className="App-logo" alt="logo" />
        <p>
          非常抱歉，該網站目前正在維護中<br />
          無法提供服務，請稍後再來！
        </p>
        {/* <button>當系統恢復運作時，通知我！</button> */}
        <a
          className="App-link"
          href="https://status.mcloudtw.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          查看服務狀態
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
