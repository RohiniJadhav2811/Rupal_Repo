import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Counter from './components/Counter';
import Rating from './components/Rating';

function App() {
  return (
    <div className="App">
      <Login></Login>
      <Registration></Registration>
      <Counter></Counter>
      <Rating></Rating>
    </div>
  );
}

export default App;
