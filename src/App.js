import {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [drink, setDrink] = useState()
  console.log(drink)

  const getDrink = async () => {
    const { data } = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    setDrink(data) 
  }

  useEffect(() => {
    getDrink();
  },[])

  return (
    <>
      <div className="App">
        <h1>Drinks</h1>
            <div className='drink_foto-div'>
            {drink && <p>{drink.drinks[0].strDrink}</p>}
            {drink && <img src={drink.drinks[0].strDrinkThumb} alt="Drink" width={200}/>}
          </div>
          <h3>Ingredientes</h3>
          <div className='ingredientes-div'>
              {drink && <p>{drink.drinks[0].strIngredient1}</p>}
              {drink && <p>{drink.drinks[0].strIngredient2}</p>}
              {drink && <p>{drink.drinks[0].strIngredient3}</p>}
              {drink && <p>{drink.drinks[0].strIngredient4}</p>}
              {drink && <p>{drink.drinks[0].strIngredient5}</p>}
              {drink && <p>{drink.drinks[0].strIngredient6}</p>}
              {drink && <p>{drink.drinks[0].strIngredient7}</p>}
              {drink && <p>{drink.drinks[0].strIngredient8}</p>}
              {drink && <p>{drink.drinks[0].strIngredient9}</p>}
              {drink && <p>{drink.drinks[0].strIngredient10}</p>}
              {drink && <p>{drink.drinks[0].strIngredient11}</p>}
              {drink && <p>{drink.drinks[0].strIngredient12}</p>}
              {drink && <p>{drink.drinks[0].strIngredient13}</p>}
              {drink && <p>{drink.drinks[0].strIngredient14}</p>}
              {drink && <p>{drink.drinks[0].strIngredient15}</p>}
          </div>
          <h3>Modo de preparo</h3>
          <div className='modo_preparo-div'>
            {drink && <p>{drink.drinks[0].strInstructions}</p>}
          </div>
        <br />
        <div className='btn-div'>
          <button onClick={getDrink}>Clique para ver outra receita</button>
        </div>
      </div>
    </>
  );
}


export default App;