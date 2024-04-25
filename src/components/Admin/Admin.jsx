import React from 'react';

const Admin = () => {
  const isAdmin = localStorage.getItem("user");
  let decodedFlag = "";

  if (isAdmin === "1") {
    const encodedFlag = "RkxBR3tEb191b193b250X3RvX2NoYW5nZV90aGVfd29ybGRfP30=";
    decodedFlag = atob(encodedFlag);
    console.log(decodedFlag);
  } else {
    window.location.replace("/");
  }

  return (
    <div>
      <p>Decoded Flag: {decodedFlag}</p>
    </div>
  );
}

export default Admin;
