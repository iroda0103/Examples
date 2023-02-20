import React, { useEffect, useState } from "react";
import PadingButton from "../utilits/paidingButton/PaidingButton";
import ButtonChange from '../utilits/buttonChange/button';
import View from "../components/view/index.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { FcPrevious } from 'react-icons/fc';
import axios from "axios";
import InvoiceAbout from "../components/invoiceAbout/index.jsx"
// import InvoiceAbout from "../components/InvoiceAbout";
function InvoiceView() {
    const [user, setUser] = useState({});
    const param = useParams();
    const navigate = useNavigate();
    console.log(param, 'param')
    function goback() {
        navigate('/invoices')
    }
    useEffect(() => {
        axios.get(`http://167.235.158.238:3001/invoices/${param.id}`).then((res) => {
            setUser(res.data)
            console.log(res.data, "yashirin")
        }).catch((err)=>{
            console.log(err)
        })
    }, [])
    return <div className="invoice">
        <span className="goback status" onClick={goback}><FcPrevious />Go Back</span>
        <View user={user}></View>
        <InvoiceAbout user={user}></InvoiceAbout>
        
    </div>
}
export default InvoiceView