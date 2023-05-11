import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Components/Header/Header';
import ListDrink from './Components/List-Drink/ListDrink';
import DetailsDrink from './Components/Details-Drink/DetailsDrink';
import ShopCartDrink from './Components/Shop-Cart-Drink/ShopCartDrink';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Header/>
      <ListDrink/>
      <DetailsDrink/>
      <ShopCartDrink/>
  </React.StrictMode>

);


