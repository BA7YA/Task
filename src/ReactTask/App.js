import React, {useState , useEffect} from "react";
import axios from "axios";
import FirstStep from "./FirstStep";
import "./App.scss"
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import Summary from "./Components/Summary";

function App() {
  const [state, setState] = useState("firstStep");
  const [price, setPrice] = useState();
  const [subscription, setSubscription] = useState();
  const [card , setCard] = useState();

  useEffect(() => {
    axios.get("https://cloud-storage-prices-moberries.herokuapp.com/prices")
  .then(
    r=>{
      setPrice(r.data.subscription_plans);
    }
  )
  }, [])

   function sw(_element){
    if(_element == "firstStep"){
      setState("firstStep");
    }
    if(_element == "secondStep"){
      setState("secondStep");
    }
    if(_element == "thirdStep"){
      setState("thirdStep");
    }
    }

   function readySubData(data){
        setSubscription(data);
    }

    function readyCardData(data){
      setCard(data);
  }
 
  return (
    <>
    <Summary active={(state == "thirdStep")? false : true} price={price} summ={subscription}/>
    <FirstStep active={(state == "firstStep")? true : false} step={sw} sub={subscription} subdata={readySubData} />
    <SecondStep active={(state == "secondStep")? true : false} step={sw} carddata={readyCardData}/>
    <ThirdStep active={(state == "thirdStep")? true : false} step={sw} price={price} carddata={card} subdata={subscription}/>
    </>
  );
}

export default App;
