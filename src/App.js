import logo from './logo.svg';
import './App.css';

function App() {
    (async () => {
  const rawResponse = await fetch('http://localhost:8080/dotz-tech/api/v1/customer/swag', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
  const content = await rawResponse.text();

  console.log(content);
})();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to dotz.
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
