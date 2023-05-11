import React from 'react'
import './DetailsDrink.css'
import Img_Drink from  '../../Img/bebida.png'

function DetailsDrink() {
  return (
    <div className='Container_DetailsDrink'>
      <div className="Components_DetailsDrink">
        <div className="img_details_drink">
          <div className="background_drink">
          <img src={Img_Drink} alt="img-drink" width='80px' className='img_drink'/> </div>     
        </div>
        <div className="details-drink">
          <div className="line"></div>
            <div className="model-drink">
              <h5 className='title-price-model' >Modelo: &nbsp;</h5> 
              <p style={{fontSize:'13px', textTransform:'unset'}}>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="price-drink">
              <h5 className='title-price-model'>Preço: &nbsp;</h5> 
              <p> 00.00</p>            
          </div>
          <button className='btn-details-drink'>comprar</button>
        </div>
      </div>
      <div className="Footer_Details">
        <h6 className='title-details-drink'>Detalhes:</h6>
        <p className='text-drink-details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda distinctio maiores deserunt reprehenderit possimus sit quia alias suscipit consectetur in. Nostrum odio magni officiis distinctio porro cum. Rem provident, quo velit fugiat explicabo excepturi dignissimos tempore? Quidem, vel repudiandae odit porro unde maiores est natus quis magni.</p>
      </div>
    </div>
  )
}

export default DetailsDrink