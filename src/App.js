
import './App.css';
import image from './shopping.jpg';
import imageTwo from './man-211128-142332.jpg';
import { GroceryList } from './GroceryList';


function App() {
  return (
    <div className="app" >

        <div className='conteiner'>
          <img  src= { image } width="200px" alt="shopping"/>
        </div>
          
         <div className='conteiner'>
              <h1> Grocery List </h1>
         </div>

            <GroceryList/> 

          <div className='conteiner'>
               <img  src= { imageTwo } width="200px" alt="man-shopping"/>
          </div>
      
    </div>
  );
}

export default App;
