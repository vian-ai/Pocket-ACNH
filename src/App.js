import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react'
import Home from './Components/Home';
import Browse from './Components/Browse';
import Collection from './Components/Collection';
import Footer from './Components/Footer';
import './Styles/App.css';
import './Styles/Responsive.css';

function App() {
  const [starredList, setStarredList] = useState([]);

  const addToStarredList = (villagerName) => {
    setStarredList([...starredList, villagerName]);
  };

  return (
    <div className="App">
      <nav className="menu">
        <Link to='/'><img src="https://i.imgur.com/IHTRUa8.png" alt="AC Leaf" width="30" /></Link>
        <Link to='/'>Home</Link>
        <Link to='/browse'>Browse</Link>
        <Link to='/collection'>Pocket</Link>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/browse' element={<Browse addToStarredList={addToStarredList}/>} />
          <Route path='/collection' element={<Collection starred={starredList}/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;