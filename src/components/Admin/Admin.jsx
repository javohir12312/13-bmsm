import React from 'react';
import md5 from 'md5'; 

const Admin = () => {
  const isAdmin = localStorage.getItem("user");
  let aaaaa = "";

  if (isAdmin == 1) {
    const iiiii = "RkxBR3tEb191b193b250X3RvX2NoYW5nZV90aGVfd29ybGRfP30=";
    aaaaa = atob(iiiii);
    const lll = md5(aaaaa); 
    console.log(lll);
  } else {
    window.location.replace("/");
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <p>Decoded Flag: {aaaaa}</p>
    </div>
  );
}

export default Admin;
