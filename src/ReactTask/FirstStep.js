import React, {useEffect, useState} from "react";
import axios from "axios";
import {
  Form, Select, Switch
} from 'antd';
import "./App.scss"

function FirstStep({step, active, subdata, sub}) {
 const [duration , setDuration] = useState();
 const [gigabytes , setGigabytes] = useState();
 const [upfront , setUpfront] = useState();

  useEffect(() => {
        if(duration == undefined)
        {
          setDuration("12")
        }
        if(gigabytes == undefined)
        {
          setGigabytes("5")
        }
        if(upfront == undefined)
        {
          setUpfront(false)
        }

  }, [])

  useEffect(() => {
      subdata(data);
  }, [duration, gigabytes, upfront ])
  
  const data ={
    duration,
    gigabytes,
    upfront
  }
  function onChange(checked) {
    setUpfront(checked);
  }

  const handleSubmit = e =>{
    e.preventDefault();
    subdata(data);
    step("secondStep");   
  }

 if(active == true){
  return (
    <>
    <div className="main-block">
      <div className="form-block">
        <div className="form-cont"> 
          <form onSubmit={handleSubmit}>
            <Form.Item label="1. Select subscription parameters:" name="size">
            </Form.Item>
            <Form.Item required label="Duration:">
              <Select value={Option.value} placeholder={duration } onChange={value => setDuration(value)}>
                <Select.Option value="3">3</Select.Option>
                <Select.Option value="6">6</Select.Option>
                <Select.Option value="12">12</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item required label="Amount of gigabytes in a cloud:">
              <Select value={Option.value} placeholder={gigabytes } onChange={value => setGigabytes(value)}>
                <Select.Option value="5">5</Select.Option>
                <Select.Option value="10">10</Select.Option>
                <Select.Option value="50">50</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Upfront payment:">
            <Switch checked={upfront} onChange={onChange}  />
            </Form.Item>
            <div className="buttons-cont">
              <button className="button" style={{gridColumn: 2, marginLeft: 38}} type={"submit"}>NEXT</button>
            </div>
          </form>
       </div>
      </div>
    </div>
    </>
  );}else { return (
    null
);}
}

export default FirstStep;

