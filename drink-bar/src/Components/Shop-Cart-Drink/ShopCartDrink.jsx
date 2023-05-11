import React from 'react'
import './ShopCartDrink.css'
import Drink_Kart from '../../Img/bebida2.png'


function ShopCartDrink() {
  return (
    <div className="Container_ShopCartDrink">
        <div className="Components_ShopCartDrink">
          <h3 className='title-my-kart'>My Cart</h3>
          <span className='cart-status'>3</span>
          <div className="Check-Box-cart-Drink">
              <input type="checkbox" />
                  <div className="Container-img-drink-kart">
                      <div className="img-drink-kart">
                          <img src={Drink_Kart} alt="img-drink" className='img-drink' width='20px'/>
                      </div>
                      <div className='model-price-drink'>
                          <h6>Skol Beats</h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <p>$ 7,99</p>
                      </div>
                  </div>        
           </div> 
           <div className="Check-Box-cart-Drink">
              <input type="checkbox" />
                  <div className="Container-img-drink-kart">
                      <div className="img-drink-kart">
                          <img src={Drink_Kart} alt="img-drink" className='img-drink' width='20px'/>
                      </div>
                      <div className='model-price-drink'>
                          <h6>Skol Beats</h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <p>$ 7,99</p>
                      </div>
                  </div>        
           </div>    

             <div className="Check-Box-cart-Drink">
              <input type="checkbox" />
                  <div className="Container-img-drink-kart">
                      <div className="img-drink-kart">
                          <img src={Drink_Kart} alt="img-drink" className='img-drink' width='20px'/>
                      </div>
                      <div className='model-price-drink'>
                          <h6>Skol Beats</h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <p>$ 7,99</p>
                      </div>
                  </div>        
           </div>   

               <div className="Footer_Kart">
                  <h6 className='title-total-drink'>Total:</h6>
                  <button className='btn-drink-kart'>Concluir</button>
              </div>    
        </div>
    </div>
  )
}

export default ShopCartDrink