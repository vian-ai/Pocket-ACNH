import { Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Browse from './Components/Browse';
import Collection from './Components/Collection';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="menu">
          <Link to='/'>+Home</Link>
          <Link to='/browse'>+Browse</Link>
          <Link to='/collection'>+Pocket</Link>
        </div>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/browse' element={<Browse />} />
          <Route path='/collection' element={<Collection />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;