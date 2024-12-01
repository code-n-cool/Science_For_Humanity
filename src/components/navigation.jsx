import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div style={{
          display:"flex",
          justifyContent:"space-between"
        }}>
          <div style={{
            display:"flex",
            gap:"50px",
            alignItems:"center"
          }}>
            <img src="img/buttons/logo.png" style={{ height: "45px" }}></img>
            <a style={{color:"white"}} href="http://localhost:3000">Incubators</a>
            <a style={{color:"white"}} href="http://localhost:3000">VC</a>
            <a style={{color:"white"}} href="http://localhost:3000">Platform</a>
            <a style={{color:"white"}} href="http://localhost:3000">Outreach</a>
          </div>
          <div style={{
            display:"flex",
            gap:"20px"
          }}>
            <img src="img/buttons/darklight.png" style={{ height: "45px" }}></img>
            <img src="img/buttons/menu.png" style={{ height: "45px" }}></img>
            <button className="btn btn-default" style={{width: "150px", height: "45px", borderRadius: "0"}}>Get in Touch</button>
          </div>
        </div>
      </div>
    </nav>
  );
};
