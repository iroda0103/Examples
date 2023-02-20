export function setAccessToken(accessToken){
  return  localStorage.setItem("accessToken",accessToken);
}
export function getAccessToken(){
  let c= localStorage.getItem("accessToken");
  console.log('ssdsd');
  return c;
}

