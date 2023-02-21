import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from 'react-icons/bs';
import image from '../assets/images.jpg';
import logoImage from '../assets/logo.png';
import userImage from "../assets/user.png";
import { getAccessToken } from "../utilits/localStorage";
const Navbar = ({functions,...res}) => {
  const [ open, setOpen ] = functions;
  console.log(res.token,'ressssssssssss');
  const [istoken,setistoken]=useState(false);
  const [token,settoken]=useState('');
  let b=localStorage.getItem("accessToken");
  console.log('navbar',b);
  useEffect(()=>{
if(b){
  setistoken(true);
}
  },[res.token,b])
  // // getAccessToken()
  // console.log(token,"getAccessToken", getAccessToken());
  // const {setTheme}=props
  // console.log(props,"theme")
  // const [theme, setTheme] = useState('light');
  function darkTema() {
    // document.body.classList.toggle("darkmode");
    // document.querySelector(".invoiceUser").classList.toggle("")
  }
  function changeTheme() {
    if (functions[0]) {
      setOpen(false);
  }
  console.log(functions[0])
  //   if (functions.modalOpen) {
  //     setOpen(false);
  // }
  }
  return <nav>
    <div className="logo"><img src={logoImage} alt="" /></div>
    <div className="panel" >
      {/* {theme} */}
      {/* <span className="sun"  onClick={changeTheme}> <MdDarkMode/></span> */}
      <span className="moun" onClick={changeTheme}><BsSunFill /></span>
      <div className="userImage" ><img src={(istoken)?image:userImage} alt="" /></div>
      {/* <div className="userImage" ><img src={image} alt="" /></div> */}
    </div>
  </nav>
}
export default Navbar
