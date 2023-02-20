import React, { useState } from "react";
import { MdNavigateNext } from 'react-icons/md';
import PadingButton from "../../utilits/paidingButton/PaidingButton";
import { Link, useNavigate } from "react-router-dom";
const Invoice = (promp) => {

    const { voices } = promp
    // console.log(voices,promp)

    let backGroundColor = ""
    let paiding = 'Pending'
    let k;

    // const {paid,to,dueDate,description,price}=promp
    if (voices.paid) {
        k = "#35D3A3";
        // document.querySelector(".pald").style.color="green"
        // document.querySelector(".circle").style.color="#444"
    }
    else {
        k = "#f68900";
    }
    // const mystyle = {
    //     color: k,
    // backGroundColor:"green"
    // };
    const navigate=useNavigate();
function wiewgo(){
    navigate(`/invoices/${voices.id}`)
}
    const [color, setColor] = useState(k);
    // console.log(color,"color",voices.paid)
    return <div className="invoiceUser" onClick={wiewgo}>
        <div className="invoiceUserNews">
            <div className="status rt--status">
                <span className="rt">#Rt3080</span>
                <span className="paragraph">{voices.dueDate}</span>
            </div>
            <span className="invoiceUser--invoiceUserNews__to">{voices.to}</span>
        </div>
            <span className="price">&pound; {voices.price}</span>
        <div className="userPrice">

            {/* <button className="pald" style={mystyle}><span className="circle" style={mystyle}></span>{paiding}</button> */}
            <PadingButton paid={voices.paid}></PadingButton>
            <span className="nextIcon">      <Link to={`/invoices/${voices.id}`}><MdNavigateNext /> </Link></span>
      

        </div>

    </div>

}
export default Invoice