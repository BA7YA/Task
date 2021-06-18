import React, {useState} from 'react'
import moment from 'moment';
import {
    Form, Input, DatePicker
  } from 'antd';
import "./App.scss"


function SecondStep({step, active, carddata}) {
  const [cvc, setCvc] = useState("");
  const [expiry, setExpiry] = useState(moment());
  const [number, setNumber] = useState();

  const data = {
    cvc,
    expiry,
    number
  }
    
  const back =() =>{
      step("firstStep");
      carddata(data);
    }


  function onChangeDate(data, dateString) {
    setExpiry(dateString);
  }

  const handleSubmit = e =>{
      e.preventDefault();
      carddata(data);
      step("thirdStep");   
  }
    
if(active == true){
        return (
        <div className="main-block">
          <div className="form-block">
            <div className="form-cont"> 
          <form onSubmit={handleSubmit}>
            <Form.Item label="2. Payment data:" name="size">
            </Form.Item>
            <Form.Item
              required
              label="Credit card number"
              type ="number">
              <Input
                value={number}
                type="number"
                required
                onChange={({target}) => setNumber(target.value)}/> 
            </Form.Item>
            <Form.Item
                required
                label="Credit card expiration date"
                type ="date"
                rules={[{ required: true, message: 'Please choose the experation date' }]}>
              <DatePicker picker="month"value={moment(expiry)} onChange={onChangeDate}/>
            </Form.Item>
            <Form.Item
                required
                label="Credit card security code"
                type ="password">
              <Input.Password
                value={cvc}
                required
                type="number"
                onChange={({target}) => setCvc(target.value)}/>  
            </Form.Item>
            <div className="buttons-cont">
              <button className="button" onClick={back}>BACK</button>
              <button className="button" style={{marginLeft: 38}} type={"submit"} >NEXT</button>
            </div>
          </form>
          </div>
          </div>
        </div>
      )}else { 
      return null }
}

export default SecondStep
