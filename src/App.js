// import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function App() {
  // const handler = () => {
  //   axios.get('http://example.com/api/test').then(res => {
  //     console.log(res)
  //   })
  // }

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={handler}>Break the world</button> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
