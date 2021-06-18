import React, {useEffect, useState} from 'react'

import "./summary.scss"
function LastSummary({summ, price}) {


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

  
return (
        <div style={{marginTop:15 , marginBottom: 30}}> 
            <div>Subscription parameters:</div>
            <div style={{marginTop:5}}>Duration:{summ?.duration} Mounths</div>
            <div style={{marginTop:5}}>Amount of gigabytes:{summ?.gigabytes} GB</div>
            <div style={{marginTop:5}}>Total per GB: {cost?.price_usd_per_gb} $</div>
            <div style={{marginTop:5}}>Total: {finalPrice} $</div>
        </div>
    )

}

export default LastSummary
