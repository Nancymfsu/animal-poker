import logo from './logo.svg';
import sydney from './assets/sydney.JPG'
import './App.css';
import Room from './components/Room/Room';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sydney} className="App-logo" alt="logo" />
        <p>
          Animal Poker
        </p>
        <input type="text" placeholder="Room name"></input>
        
        <button>Create Room</button>
      </header>
      <Room name="Test"/>
    </div>
  );
}

export default App;
