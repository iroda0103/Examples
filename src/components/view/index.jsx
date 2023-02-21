import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonChange from "../../utilits/buttonChange/button.jsx";
import { getAccessToken } from "../../utilits/localStorage.js";
import PadingButton from "../../utilits/paidingButton/PaidingButton.jsx";
function View({ user }) {
    let token = localStorage.getItem("accessToken")
    let location = useLocation();
    let b = user.paid;
    const [paid, setPaid] = useState(b)
    console.log(paid, 'ededdddddddddddddddddddd', user.paid, b);
    const [click, setClick] = useState(false)
    console.log(token);
    const navigate = useNavigate();
    const deleteInvoice = () => {
        console.log(token, 'deletelogin');
        if (!token) {
            navigate("/login")
            console.log("deleteinvoisesese");
        }
        else {
            console.log('asasasasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
            axios.delete(`http://167.235.158.238:3001/invoices/${user.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                navigate('/')
            })
        }
    }
    function ChangePaid() {
        setClick(true);
        console.log("mkmk");
        console.log('meeeeee', user.paid, paid, !paid);
        console.log('meeeeee', paid);
        if (!token) {
            navigate("/login");
            console.log("deleteinvoisesese");

        }
        else {
            setPaid(paid => paid ? false : true);
            user.paid = paid;
            let obj = {
                "userId": 2,
                "paid": paid,
                "email": user.email,
                "to": user.to,
                "dueDate": user.dueDate,
                "term": user.term,
                "createdDate": user.createdDate,
                "description": user.description,
                "price": user.price
            }


            const a = axios.put(`http://167.235.158.238:3001/invoices/${user.id}`, obj, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(() => {
                console.log('edited user');
            })
        }



    }

    function editInvoice() {
        if (!token) {
            navigate("/login");
            console.log("deleteinvoisesese");

        }
        let b = location.pathname;
        console.log(token, 'dfdfdfdf');
        navigate(b + `/edit`)

    }


    return <div className="invoiceUser">
        <div className="status wiew__status">
            <span className="paragraph">Status</span>
            <PadingButton paid={user.paid}></PadingButton>
        </div>
        <div className="status wiew__status">
            <ButtonChange type='edit' onClick={editInvoice}><span >Edit</span></ButtonChange>
            <ButtonChange type='delete' onClick={deleteInvoice}><span >Delete</span></ButtonChange>
            <ButtonChange type="mark" className="mark" onClick={ChangePaid}><span > <span className="mobile--none">Mark</span> as Paid</span></ButtonChange>
        </div>
    </div>
}
export default View