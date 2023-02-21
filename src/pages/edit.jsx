import React, { useContext, useEffect, useState } from 'react';
import { Button, Cascader, Checkbox, Col, DatePicker, Form, Input, InputNumber, Row, Select, Space } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useLocation, useParams } from 'react-router';
import { FcPrevious } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import useInputValue from '../hooks/useInputValue';
import axios from 'axios';
import ThemeContext from '../context/ThemeContext';
function Edit() {
  const navigate = useNavigate();

  const theme = useContext(ThemeContext);
  // className={`theme theme-${theme}`}
  // const [clientName, ChangeClientName] = useInputValue('');
  // const [email, changeEmail] = useInputValue('');
  // // const [dueDate, changeDueDate] = useInputValue('');
  // const [terms, changeterms] = useInputValue('');
  // const [description, changedescription] = useInputValue('');
  // const [price, changePrice] = useInputValue('');
  let token = localStorage.getItem("accessToken")

  //   if (!token) {
  //       window.location.href='/login'

  // } 
  let [data, setData] = useState([]);
  const param = useParams();
  const location = useLocation();
  console.log('param', param.id, location);
  useEffect(() => {

    if (param.id) {
      axios.get(`http://167.235.158.238:3001/invoices/${param.id}`).then((res) => {
        setData(res.data)
        console.log("kekkkkk",res.data);
      })
    }
  },[])
  function finish(values) {
    console.log(values);

    const formData = new FormData();
    formData.append('userId', 2);
    formData.append('paid', false);
    formData.append('email', values.email);
    formData.append('to', values.name);
    formData.append('dueDate', values.dueDate);
    formData.append('term', values.term);
    formData.append('createdDate', values.dueDate);
    formData.append('description', values.description);
    formData.append('price', values.price);
    console.log(formData);
    // axios.post(`http://167.235.158.238:3001/invoices`,formData,{
    //   headers:{
    //     Authorization: `Bearer ${token}`
    //   }
    // })
    console.log(values);
    // e.preventDefault();
    if (!param.id) {
      axios.post(`http://167.235.158.238:3001/invoices`, {
        "userId": 2,
        "paid": false,
        "email": values.email,
        "to": values.name,
        "dueDate": "2022-10-10",
        "term": "30",
        "createdDate": values.dueDate,
        "description": values.description,
        "price": values.price
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        navigate(-1)
      })
    }
    else {
      axios.put(`http://167.235.158.238:3001/invoices/${param.id}`, {
        "userId": 2,
        "paid": false,
        "email": values.email,
        "to": values.name,
        "dueDate": "2022-10-10",
        "term": "30",
        "createdDate": values.dueDate,
        "description": values.description,
        "price": values.price
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(() => {
        navigate(-1)
      })
    }
  }
  //changeDueDate changeterms changedescription changePrice

  function goback() {
    navigate(-1)
  }
  console.log(location.pathname, 'edites')
  let a = (location.pathname.includes('edit')) ? 'Edit' : ('Add Voices')

  return <div>
    <span className="goback status" onClick={goback}><FcPrevious />Go Back</span>
    <div className="invoiceUser edit">


      <h2>{a} <span className='paragraph'>#</span>XM9141</h2>
      <Form layout="vertical" onFinish={finish} >
        <Form.Item name={'adress'} label="Street Address" className={`item-${theme}`}>
          <Input />
        </Form.Item>
        <FormItem className={`display item-${theme} `}>
          <Row gutter={16}>
            <Col className="gutter-row" span={8}>
              <Form.Item name={'city'} label="City">
                <Input />
              </Form.Item></Col>
            <Col className="gutter-row" span={8}>
              <Form.Item name={'postcode'} label="Post Code">
                <Input />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={8}>
              <Form.Item name={'country'} label="Country">
                <Input />
              </Form.Item>
            </Col>

          </Row>

        </FormItem>
        <Form.Item name={'name'} className={`item-${theme}`} label="Client's Name" rules={[{
          required: true
        }]} >
          <Input defaultValue={(param.id) ?data.to:""} />
        </Form.Item>
        <Form.Item name={'email'} className={`item-${theme}`} label="Client's Email" rules={[{ type: 'email', required: true },]}>
          <Input defaultValue={(param.id) ?data.email:""} />
        </Form.Item>
        <Form.Item name={'address'} className={`item-${theme}`} label="Street Address" >
          <Input />
        </Form.Item>
        <Row gutter={16} className={`item-${theme}`}>
          <Col className="gutter-row" span={8}>
            <Form.Item name={'city'} label="City" >
              <Input />
            </Form.Item></Col>
          <Col className="gutter-row" span={8}>
            <Form.Item name={'postcode'} label="Post Code">
              <Input />
            </Form.Item>
          </Col>
          <Col className="gutter-row" span={8}>
            <Form.Item name={'country'} label="Country">
              <Input />
            </Form.Item>
          </Col>

        </Row>
        <Row gutter={12} className={`item-${theme}`}>
          <Col>
            <FormItem label="Due Date" name={'dueDate'}>
              <DatePicker showTime />
            </FormItem>
          </Col>
          <Col><FormItem label="Payment Terms" rules={
            [{
            }]
          }>
            <Space wrap >
              <Select
                defaultValue="Net 30 days" name={'term'}
                style={{
                  fontWeight: 700,
                  color: 'black',
                  display: 'flex',
                  flexGrow: 1
                }}
                options={[
                  {
                    value: 30,
                    label: 'Net 30 days',
                  },
                  {
                    value: 14,
                    label: 'Net 14 days',
                  },
                  {
                    value: 7,
                    label: 'Net 7 days',
                  },
                  {
                    value: 1,
                    label: 'Net 1 days'
                  },
                ]}
              />
            </Space>
          </FormItem>

          </Col>
        </Row>
        <Form.Item name={'description'} label="Project Description" className={`item-${theme}`}>
          <Input />
        </Form.Item>
        <Form.Item className={`item-${theme}`}
          name={'price'}
          label="Price"
          rules={[
            {
              type: 'number',
              min: 100,
              max: 1000,
              required: true
            },
          ]}
        >
          <InputNumber defaultValue={(param.id) ?data.price:0} />
        </Form.Item>
        <FormItem className={`item-${theme}`}>
          <Row gutter={12} className='justify-end'>
            <Col>  <Button type="primary" htmlType="submit">
              Cancel
            </Button></Col>
            <Col >
              <Button type="primary" htmlType="submit">
                Submit
              </Button></Col>
          </Row>

        </FormItem>
      </Form>
    </div>
  </div>
}
export default Edit
