import React from "react";
function InvoiceAbout({ user }) {
    // console.log(user, "usersvdshgd")
    return <div className="invoiceUser about">
        <div className="status justify  justify invoiceabout__list">
            <div><span className="paragraph">#</span><span className="rt">LT4895</span>
                <p className="paragraph">afsdf</p></div>
            <div className="aboutSpan">
                <span className="paragraph">MMV</span>
                <span className="paragraph">Akkaraipattu</span>
                <span className="paragraph">32400</span>
                <span className="paragraph">Sri Lonka</span>
            </div>
        </div>
        <ul className="status justify invoiceabout__list">
            <li><span className="paragraph">Invaice Date</span>
                <p className="rt">{user.createdDate}</p>
                <ul>
                    <li><span className="paragraph">Payment Due</span>
                        <p className="rt">{user.dueDate}</p></li>
                </ul>

            </li>
            <li><span className="paragraph">Bill To</span>
                <p className="rt">{user.to}</p></li>
            <li><span className="paragraph">Sent to</span>
                <p className="rt">{user.email}</p></li>
        </ul>
        <div className="amont-status">
            <ul className="status amont-status__list invoiceabout__list">
                <li><span className="paragraph block">Item Name</span><span className="rt">{user.to}</span></li>
                <li><span className="paragraph block">QTY</span><span className="paragraph">{user.id}</span></li>
                <li><span className="paragraph block">Price</span><span className="paragraph">&pound;{user.price}</span></li>
                <li><span className="paragraph block">Total</span><span className="rt">&pound;{user.price}</span></li>
            </ul>
            <div className="last__about"><span className="paragraph">Amount Due</span>
                <span className="last-price">&pound;{user.price}</span>
            </div>
        </div>

    </div>
}
export default InvoiceAbout