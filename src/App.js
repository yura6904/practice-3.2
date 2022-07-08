import './App.css';
import Listing from './components/Listing/Listing';
import data from './data/etsy.json'

function App() {
  const items = data

  return (
    <div className="wrapper">
      <Listing items={items}/>
    </div>
  );
}

export default App;
