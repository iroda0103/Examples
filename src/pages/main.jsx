import React, { useContext, useEffect, useState } from "react";
import Main from "../layout/Main";
import ThemeContext from "../context/ThemeContext";
import InvoiceView from "./invoiceView";
import Login from "./login";
import { Route, Routes } from "react-router-dom";
import NewInvoice from "./newInvoice";
import NotFound from "./notFound";
import Edit from "./edit";
import { getInvoices } from "../store/invoices.slice";
import { useDispatch, useSelector } from "react-redux";
function MainPage() {
  const theme = useContext(ThemeContext);
  const invoices=useSelector(state=>state.invoices)
    console.log('invoices', invoices.invoices,"llllllllllll")
    const dispatch = useDispatch()
  useEffect(() => {
    dispatch( getInvoices())
  }, [])
  return <main className={`theme theme-${theme}`}>
    <Routes>
      <Route path="/" element={<Main datainvoices={invoices.invoices} />} />
      <Route path="/invoices" element={<Main  datainvoices={invoices.invoices}/>} />
      <Route path="/invoices/:id" element={<InvoiceView></InvoiceView>} />
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/:id/edit" element={<Edit></Edit>}></Route>
      <Route path="/invoices/:id/edit" element={<Edit></Edit>}></Route>
      <Route path='/newinvoice' element={<Edit></Edit>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  </main>
}
export default MainPage