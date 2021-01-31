import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts'
import Postfrom  from './components/Postform'


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Postfrom /> 
          <hr />
          <Posts />
      </header>
    </div>
  );
}

export default App;
