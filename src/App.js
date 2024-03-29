import './App.css';
import image from './shoppingL.jpg';
import imageTwo from './man.jpg';
import { GroceryList } from './GroceryList';

function App() {
  return (
    <div className='app'>
      <div className="container">
        <img src={image} alt="shopping" width="250px"/>
      </div>
      <div className="container">
        <h1>Grocery List</h1>
      </div>
      <GroceryList />
      <div className="container">
        <img src={imageTwo} alt="man" width="250px"/>
      </div>

    </div>
  );
}

export default App;
