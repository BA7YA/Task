import React, {useEffect, useState} from 'react'

import "./summary.scss"
function Summary({summ, price, active}) {


  const [finalPrice , setFinalPrice] = useState();

  let cost =  price?.find(p =>{
      if(p.duration_months == summ?.duration){
        return p.price_usd_per_gb;
      }
    });

  useEffect(() => {
    if(summ?.upfront == true){
      let total = (((cost?.price_usd_per_gb * summ?.gigabytes)* summ?.duration)*0.90)
      setFinalPrice(total);
    }else{
      let total = ((cost?.price_usd_per_gb * summ?.gigabytes)* summ?.duration)
      setFinalPrice(total);
    }
  }, [cost,summ])



if(active == true){
    return (
      <div className="main-block">
        <div className="summary-block">
          <div className="form-cont"> 
          <div>Subscription parameters:</div>
          <div style={{marginTop:5}}>Duration:{summ?.duration} Mounths</div>
          <div style={{marginTop:5}}>Amount of gigabytes:{summ?.gigabytes} GB</div>
          <div style={{marginTop:5}}>Total: {finalPrice} $</div>
         </div>
        </div>
      </div>
    )}else{
      return null;
    }

}

export default Summary
