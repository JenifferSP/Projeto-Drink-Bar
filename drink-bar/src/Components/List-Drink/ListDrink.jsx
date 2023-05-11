import React, {useState, useEffect} from 'react'
import './ListDrink.css'
import {FaSearch} from 'react-icons/fa'
import fetchProducts from '../../api/fetchProducts'
import ProductCard from '../ProductCards/productCard'

function ListDrink() {
  const [products, setProducts] = useState([])
  const [searchValue, setSearchValue] = useState('');

  useEffect(() =>{
    /* */
    fetchProducts( 'iphone').then((response) =>{
      setProducts(response);
      console.log(response)
    });
  }, []);

  return (
    <div className='Container_ListDrink'>
      <div className="Components_ListDrink">
      
        <div className="Container_inputSearch">
          <input type="search" value={searchValue} onChange={({target}) => setSearchValue(target.value)} className='inputSearch'  placeholder='Sua sede é de que?...' required/>
          <button type="submit" className='Button_search'><FaSearch/>
          </button>
        </div>
        <section className="products_container">
           {
            products.map((product) => <ProductCard key={product.id} data={product}/>)
           }
        </section>

      </div>    
    </div>
  )
}

export default ListDrink