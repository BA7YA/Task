import React, {useState} from "react";
import axios from "axios";
import {
  Form, Checkbox, Input, Alert
} from 'antd';
import "./App.scss"
import LastSummary from "./Components/LastSummary";
import { findAllInRenderedTree } from "react-dom/test-utils";


function ThirdStep({step, active, carddata, subdata, price}) {



  const data ={
    duration:subdata?.duration,
    gigabytes:subdata?.gigabytes,
    upfront:subdata?.upfront,
    number:carddata?.number,
    expiry:carddata?.expiry,
    cvc:carddata?.cvc,
  }

  const back =() =>{
      step("secondStep");
  }

  const handleSubmit = e =>{
    e.preventDefault();
    
    axios.post("https://httpbin.org/post", data)
    .then(
      r=>{
        window.confirm('Do data was sended');
      },
      e=>{
        window.confirm('Do data was sended');
      }
    )
}

  if(active == true){
    return (
      <>
        <div className="main-block">
          <div className="form-block">
            <div className="form-cont">
              <form onSubmit={handleSubmit}>
                <Form.Item label="3. Confirmation" name="size">
                </Form.Item>
                <LastSummary price={price} summ={subdata} />
                <Form.Item required name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                    <Input required />
                </Form.Item>
                  <Checkbox required>Terms and conditions agreement checkbox</Checkbox>
                <div className="buttons-cont" style={{marginTop: 20}}>
                  <button className="button" onClick={back}>BACK</button>
                  <button className="button" type="submit" style={{marginLeft: 38}}>Confirm</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )}else { return (
        null
    );}
}

export default ThirdStep
